const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret';

module.exports = {
  generateToken: (user) => {
    return jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
  }
};
