const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

// Ruta protegida para administrar turnos
router.post('/modificar-turnos', authenticateToken, (req, res) => {
  // Lógica para modificar turnos
  res.json({ message: 'Turnos modificados correctamente' });
});

module.exports = router;
