import { useDispatch, useSelector } from 'react-redux'
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent
} from '../store'
import calendarApi from '../api/calendarApi'
import { convertEventsToDateEvent } from '../helpers'
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector(state => state.calendar)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const setActiveEvent = async calendarEvent => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async calendarEvent => {
    try {
      // ok
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
        dispatch(onUpdateEvent({ ...calendarEvent, user }))
        return
      }
      // crear
      const { data } = await calendarApi.post('/events', calendarEvent)
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }))
    } catch (error) {
      console.error(error)
      Swal.fire('Error on saving', error.response.data.message, 'error')
      return
    }
  }

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`)
      dispatch(onDeleteEvent())
    } catch (error) {
      console.error(error)
      Swal.fire('Error on deleting', error.response.data.message, 'error')
    }
  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvent(data.events)
      dispatch(onLoadEvents(events))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    //props
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents
  }
}
