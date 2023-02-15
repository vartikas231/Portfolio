const router = require("express").Router();
// require("../controlers/achievementCtrl");

const {
  getAchievement,
  getAchievementId,
  addAchievement,
  updateAchievement,
  delAchievement,
} = require("../controlers/achievementCtrl");

// const achievementSchema = require("../models/achievementModel");
// .......................education..........................

// get education
router.get("/achievement", getAchievement);

// add /post about education
router.post("/achievement", addAchievement);

// get specific education by id
router.get("/achievement/:id", getAchievementId);

// update specific education by id
router.put("/achievement/update/:id", updateAchievement);

// delete specific education by id
router.delete("/achievement/:id", delAchievement);

module.exports = router;
