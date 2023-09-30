const { response } = require('express')
const { validationResult } = require('express-validator')
const { check } = require('express-validator')

const fieldValidator = (req, res = response, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }
  next()
}

const nameValidator = check('name', 'Name is required').not().isEmpty()
const emailValidator = check('email', 'Email is required').isEmail()
const passwordValidator = check(
  'password',
  'Password must be at least 6 characters'
).isLength({ min: 6 })

module.exports = {
  fieldValidator,
  nameValidator,
  emailValidator,
  passwordValidator
}
