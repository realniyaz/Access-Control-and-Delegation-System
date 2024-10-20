app.post('/devices', authMiddleware, async (req, res) => {
  const { name } = req.body;
  try {
    const newDevice = new Device({ name, owner: req.user.id });
    await newDevice.save();
    res.status(201).send('Device registered');
  } catch (err) {
    res.status(500).send('Error registering device');
  }
});
