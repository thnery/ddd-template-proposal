const { findOne, findAll } = require('../../../database/repository/index')

exports.findOneUserEmail = ({ email }) => {
  return findOne('User', { where: { email }, attributes: { exclude: ['password'] }, raw: true })
}

exports.findOneUserById = ({ id }) => {
  return findOne('User', {
    where: { id },
    attributes: { exclude: ['password', 'forgot'] },
    raw: true
  })
}

exports.findAllUsers = () => {
  return findAll('User', { attributes: { exclude: ['password'] }, raw: true })
}
