/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from '../'
import { localizer, getMessagesES } from '../../helpers'

import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks'

export const CalendarPage = () => {
  const { user } = useAuthStore()
  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'week'
  )

  const eventStyleGetter = event => {
    const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { style }
  }

  const onDoubleClick = () => {
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

  useEffect(() => {
    startLoadingEvents()
  }, [])

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
