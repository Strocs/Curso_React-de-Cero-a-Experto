const { response, request } = require('express')

const getEvents = (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    message: 'get events'
  })
}

const createEvent = (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    message: 'create events'
  })
}

const updateEvent = (req = request, res = response) => {
  const { id } = req.params

  res.status(200).json({
    ok: true,
    message: 'update events',
    id
  })
}

const deleteEvent = (req = request, res = response) => {
  const { id } = req.params

  res.status(200).json({
    ok: true,
    message: 'delete events',
    id
  })
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}
