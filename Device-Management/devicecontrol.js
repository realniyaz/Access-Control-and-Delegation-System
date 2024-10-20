app.put('/devices/:id/control', authMiddleware, roleMiddleware(['admin', 'resident']), async (req, res) => {
  const { status } = req.body;
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).send('Device not found');
    
    // Only device owners or admins can control
    if (device.owner.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).send('Permission denied');
    }

    device.status = status;
    await device.save();
    res.status(200).send('Device updated');
  } catch (err) {
    res.status(500).send('Error controlling device');
  }
});
