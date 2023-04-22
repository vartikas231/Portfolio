const router=require('express').Router();
const cloudinary=require('cloudinary');
const { log } = require('console');
const fs = require('fs');



cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// post upload image
router.post('/upload', (req, res) => {
  // const { public_id, secure_url } = req.body;


  try {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('no file uploaded');
    }

    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "size is too big" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "incorrect file format" });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "udemy" },
      async (err, result) => {
        if (err) throw err;

        removeTmp(file.tempFilePath);
        res.json({ public_id: result.public_id, url: result.secure_url });
      }
    )


  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// delete image
router.post('/destroy',(req,res)=>{
    const {public_id}=req.body
    try {
        if(!public_id){
            return res.status(400).json({msg:"no images selected"})
        }
        cloudinary.uploader.destroy(public_id,async(err,result)=>{
            res.json({msg:"image deleted"})
        })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
})



const removeTmp=(path)=>{
    fs.unlink(path,err=>{
        if(err)throw err;
    })
}

module.exports=router;