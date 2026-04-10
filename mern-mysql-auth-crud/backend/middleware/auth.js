const jwt = require('jsonwebtoken');
const db = require('../config/db');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('AUTH DEBUG - Token received:', !!token ? 'YES' : 'NO', token ? token.slice(0,20)+'...' : '');

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'campuspe_jwt_secret_2024_change_this');
    console.log('AUTH DEBUG - Decoded ID:', decoded.id);
    
    // Get user from DB
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [decoded.id]);
    console.log('AUTH DEBUG - User rows:', rows.length);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = rows[0];
    console.log('AUTH DEBUG - User authorized:', req.user.email);
    next();
  } catch (error) {
    console.error('AUTH ERROR:', error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;

