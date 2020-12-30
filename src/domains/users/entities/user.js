console.log('loading users entities')

module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {

    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })

  return User
}
