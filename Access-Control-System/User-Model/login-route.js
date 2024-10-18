const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});
