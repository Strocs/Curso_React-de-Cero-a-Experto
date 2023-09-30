// all have to be validate for JWT

const { Router } = require('express')
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.use(validateJWT)

// GET EVENTS
router.get('/', getEvents)

// CREATE EVENT
router.post('/', createEvent)

// UPDATE EVENT
router.put('/:id', updateEvent)

// DELETE EVENT
router.delete('/:id', deleteEvent)

module.exports = router
