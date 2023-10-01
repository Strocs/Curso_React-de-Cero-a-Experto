const mongoose = require('mongoose')

const dbConnection = async () => {
  await mongoose
    .connect(process.env.DB_CNN)
    .then(() => console.log('DB Online'))
    .catch(error => {
      console.log(error)
      throw new Error('Connection to DB failed')
    })
}

module.exports = {
  dbConnection
}
