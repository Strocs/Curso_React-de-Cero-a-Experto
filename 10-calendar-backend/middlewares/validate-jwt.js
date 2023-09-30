const { response } = require('express')

const jwt = require('jsonwebtoken')

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token')

  // check if token exists
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: 'No token provided'
    })
  }

  // verify token

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED)

    // save user id and name on request
    req.uid = payload.uid
    req.name = payload.name
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Invalid token'
    })
  }

  next()
}

module.exports = {
  validateJWT
}
