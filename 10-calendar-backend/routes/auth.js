// Documentation
/* 
  User routes / Auth
  host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const { fieldValidator } = require('../middlewares/fieldValidator')

const router = Router()

const nameValidator = check('name', 'Name is required').not().isEmpty()
const emailValidator = check('email', 'Email is required').isEmail()
const passwordValidator = check(
  'password',
  'Password must be at least 6 characters'
).isLength({ min: 6 })

router.post(
  '/new',
  // middlewares
  [nameValidator, emailValidator, passwordValidator, fieldValidator],
  createUser
)

router.post('/', [emailValidator, passwordValidator, fieldValidator], loginUser)
router.get('/renew', renewToken)

module.exports = router
