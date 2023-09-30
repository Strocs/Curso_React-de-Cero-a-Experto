// agregar intellisense a los controllers
const { response, request } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// Errors management

const createUser = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    // validate if user exists
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({
        ok: false,
        message: 'User already exists'
      })
    }

    // create
    user = new User(req.body)

    // encrypt password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    // save user on DB
    await user.save()

    // return response with data
    res.status(201).json({
      ok: true,
      uuid: user?.id,
      name: user?.name
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error registering user'
    })
  }
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        ok: false,
        message: 'User does`t existe with this email'
      })
    }

    // confirm passwords
    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: 'Incorrect password'
      })
    }

    // generate JWT

    res.status(201).json({
      ok: true,
      uuid: user?.id,
      name: user?.name
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error registering user'
    })
  }
}

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    message: 'renew'
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken
}
