var express = require('express');
var router = express.Router();
const db = require("../config/firebase");
const cloudinary = require("../config/cloudinary.config");
const multerUpload = require("../config/multer.config");

router.post("/api/upload", multerUpload, async(req, res) => {
  console.log(req.files);
  const files = req.files;
  try{
    const urlPromises = files.map(async file => {
      const result = await cloudinary.uploader.upload(file.path);

      return result.url
    })

    const imageUrls = await Promise.all(urlPromises)
    //console.log(imageUrls)
    const data = {images: imageUrls}

    db.collection("image").add(data)
    .then(res)
    .catch(err => res.status(400).json({status: err, message: err.message}))
    res.send(data)
  }catch(e){
    res.status(400).send(e.message)
  }

})

module.exports = router;




/*const express = require('express');
const router = express.Router();
const controller = require('../controller/file.controller')

let routes = (app) => {
    router.post("/upload", controller.upload);

    app.use(router)
}

module.exports = routes;*/

