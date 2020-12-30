const { findAllUsers } = require('../repository/user')

exports.getAll = async (req, res, next) => {
  try {
    const users = await findAllUsers()
    return res.status(200).json({ data: users })
  } catch (err) {
    next(err)
  }
}
