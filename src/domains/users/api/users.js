// const { findAllUsers } = require('../repository/user')
const userService = require('../services/listAllUsers')

exports.getAll = async (req, res, next) => {
  try {
    // const users = await findAllUsers()

    const users = userService.listAllUsers()
    return res.status(200).json({ data: users })
  } catch (err) {
    next(err)
  }
}
