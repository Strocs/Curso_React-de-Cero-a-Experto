import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector(state => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = calendarEvent => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async calendarEvent => {
    // TODO: ir la backend

    // ok
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      // crear
      dispatch(onAddNewEvent({ ...calendarEvent, _id: crypto.randomUUID() }))
    }
  }

  const startDeletingEvent = async () => {
    dispatch(onDeleteEvent())
  }

  return {
    //props
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
