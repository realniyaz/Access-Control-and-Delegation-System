const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['on', 'off'], default: 'off' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Device = mongoose.model('Device', DeviceSchema);
module.exports = Device;
