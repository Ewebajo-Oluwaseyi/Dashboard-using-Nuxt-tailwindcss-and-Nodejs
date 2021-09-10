const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10000000 },

  fileFilter: (req, file, cb) => {

    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error("Invalid image format!"));
      return;
    }
    cb(null, true);
  },
}).array("files", 5);

module.exports = upload;