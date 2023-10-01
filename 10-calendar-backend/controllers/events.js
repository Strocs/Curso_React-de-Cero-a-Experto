const { response, request } = require('express')
const Event = require('../models/Event')

const getEvents = async (req = request, res = response) => {
  const events = await Event.find().populate('user', 'name')

  res.status(200).json({
    ok: true,
    events
  })
}

const createEvent = async (req = request, res = response) => {
  const event = new Event(req.body)

  try {
    event.user = req.uid

    const savedEvent = await event.save()

    res.json({
      ok: true,
      event: savedEvent
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Something went wrong'
    })
  }
}

const updateEvent = async (req = request, res = response) => {
  const { id } = req.params

  try {
    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({
        ok: false,
        message: 'Event not found'
      })
    }

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        message: 'User not authorized'
      })
    }

    const newEvent = {
      ...req.body,
      user: req.uid
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, {
      new: true
    })

    res.status(200).json({
      ok: true,
      event: updatedEvent
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Something went wrong'
    })
  }
}

const deleteEvent = async (req = request, res = response) => {
  const { id } = req.params

  try {
    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({
        ok: false,
        message: 'Event not found'
      })
    }

    if (event.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        message: 'User not authorized'
      })
    }

    const deletedEvent = await Event.findByIdAndDelete(id)

    res.status(200).json({
      ok: true,
      message: 'Event deleted',
      event: deletedEvent
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Something went wrong'
    })
  }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}
