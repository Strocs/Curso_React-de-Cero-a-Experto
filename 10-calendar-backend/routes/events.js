// all have to be validate for JWT

const { Router } = require('express')
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')
const { validateJWT } = require('../middlewares/validate-jwt')
const { check } = require('express-validator')
const { fieldValidator } = require('../middlewares/fieldValidator')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(validateJWT)

// GET EVENTS
router.get('/', getEvents)

// CREATE EVENT
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    fieldValidator
  ],
  createEvent
)

// UPDATE EVENT
router.put(
  '/:id',
  check('title', 'Title is required').not().isEmpty(),
  check('start', 'Start date is required').custom(isDate),
  check('end', 'End date is required').custom(isDate),
  fieldValidator,
  updateEvent
)

// DELETE EVENT
router.delete('/:id', deleteEvent)

module.exports = router
