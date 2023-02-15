const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  achievement: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("achievement", achievementSchema);
