const { getAll } = require('../../domains/users/api/users')

exports.path = '/users'
exports.method = 'GET'
exports.middleware = []
exports.authenticate = false

exports.handler = async (req, res, next) => {
  try {
    let users = getAll()
    return res.status(200).json({ data: { users: users } })
  } catch (error) {
    next(error)
  }
}

