const achievementSchema = require("../middlewares/models/achievementModel");

// ...........get about user.............
exports.getAchievement = async (req, res) => {
  // first way
  const achievement = await achievementSchema.find();
  try{
  res.json(achievement);}
  catch(error){
    res.status(500).json({msg:`server issue`})
  }
};

// ...........add about user.............
exports.addAchievement = async (req, res) => {
  const {achievement} = req.body;

  // first way
  try {
    const newAchievement = new achievementSchema({
      achievement
    })

    await newAchievement.save();
    res.json(newAchievement);
  } catch (error) {
    res.status(500).json({ msg: `server problem` });
  }
};

// ...........get about specific user.............
exports.getAchievementId = async (req, res) => {
  // one way

  try {
    const achievement = await achievementSchema.findById(req.params.id);
    res.json(achievement);
  } catch (error) {
    res.status(500).json({msg: `server issue`});
  }

 
};

// ...........update about specific user.............
exports.updateAchievement = async (req, res) => {
  // oneway
  const { achievement } = req.body;
  try {
    
    const newAchievement = await achievementSchema.findByIdAndUpdate(
      req.params.id,
      {
        achievement,
      }
    );
    let results = await newAchievement.save();
    await results;
    res.json({ msg: "achievement updated" });
  } catch (error) {
    res.status(500).json({ msg: `server issue` });
  }
};

// ...........delete specific user.............
exports.delAchievement = async (req, res) => {
  const achievement = await achievementSchema.findByIdAndDelete(req.params.id);

  res.json({ msg: "achievement deleted" });
};
