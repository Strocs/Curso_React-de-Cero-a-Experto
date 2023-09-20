import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../'
import { localizer, getMessagesES } from '../../helpers'
import { Calendar } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const CalendarPage = () => {
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: isSelected ? '#00c040' : '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { style }
  }

  const onDoubleClick = event => {
    console.log({ doubleClick: event })
    openDateModal()
  }

  const onSelect = event => {
    setActiveEvent(event)
  }

  const onViewChanged = event => {
    localStorage.setItem('lastView', event)
    // No necesario porque ya está en el storage y en cada re-render se carga en el state
    setLastView(event)
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
