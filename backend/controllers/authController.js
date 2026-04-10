const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.register = async (req, res, next) => {
  try {
    console.log('=== REGISTER START ===', req.body);
    
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password required' });
    }

    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password length:', hashedPassword.length);

    const [result] = await db.query(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email.toLowerCase(), phone || null, hashedPassword]
    );

    console.log('USER CREATED ID:', result.insertId);

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: { id: result.insertId, name, email: email.toLowerCase(), phone }
    });
  } catch (error) {
    console.error('=== REGISTER ERROR ===', error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log('=== LOGIN START ===', req.body.email);

    const { email, password } = req.body;

    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);
    
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = rows[0];
    console.log('USER FOUND ID:', user.id);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('PASSWORD MATCH:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'campuspe_jwt_secret_2024_change_this', { expiresIn: '7d' });

    console.log('LOGIN SUCCESS - Token generated');

    res.json({
      success: true,
      token,
      user: { id: user.id, name: user.name, email: user.email, phone: user.phone }
    });
  } catch (error) {
    console.error('=== LOGIN ERROR ===', error);
    next(error);
  }
};

exports.getMe = async (req, res) => {
  res.json({ success: true, user: req.user });
};

exports.forgotPassword = async (req, res, next) => {
  try {
    console.log('FORGOT PASSWORD:', req.body.email);

    const { email } = req.body;

    const [rows] = await db.query('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = crypto.randomBytes(20).toString('hex');
    const expiry = new Date(Date.now() + 3600000); // 1 hour

    await db.query(
      'UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?',
      [token, expiry, email.toLowerCase()]
    );

// TODO: Enable email with EMAIL_* .env vars
    // Mock email - log token for dev
    const resetUrl = `http://localhost:5173/reset-password?token=${token}`;
    console.log(`🔗 Reset URL (dev): ${resetUrl}`);
    console.log(`📧 Reset token generated for ${email}: ${token.slice(0,10)}... (expires in 1hr)`);


    res.json({ message: 'Reset link sent to email' });
  } catch (error) {
    console.error('FORGOT ERROR:', error);
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    const [rows] = await db.query(
      'SELECT * FROM users WHERE reset_token = ? AND reset_token_expiry > NOW()',
      [token]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      'UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?',
      [hashedPassword, rows[0].id]
    );

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('RESET ERROR:', error);
    next(error);
  }
};

