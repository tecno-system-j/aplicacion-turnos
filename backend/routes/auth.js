const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Usuario administrador de ejemplo (puedes usar una base de datos en su lugar)
const adminUser = {
  username: 'admin',
  password: '$2b$10$zK5p4Or.jM9JXsqivF9peOlODD8/IzfC8.QZ5F2YXHQtkb3vZLwM6' // 'contraseña_secreta' encriptada
};

// Ruta para login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== adminUser.username) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const validPassword = await bcrypt.compare(password, adminUser.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const token = jwt.sign({ username: adminUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
