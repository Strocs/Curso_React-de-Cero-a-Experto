// Documentation
/* 
  User routes / Auth
  host + /api/auth
*/

const { Router } = require('express')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const {
  fieldValidator,
  nameValidator,
  emailValidator,
  passwordValidator
} = require('../middlewares/fieldValidator')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.post(
  '/new',
  // middlewares
  [nameValidator, emailValidator, passwordValidator, fieldValidator],
  createUser
)

router.post('/', [emailValidator, passwordValidator, fieldValidator], loginUser)
router.get('/renew', [validateJWT], renewToken)

module.exports = router
