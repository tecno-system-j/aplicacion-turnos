
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && user.comparePassword(password)) {
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, role: user.role });
  } else {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }
};

module.exports = { login };
