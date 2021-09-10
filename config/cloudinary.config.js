require('dotenv').config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "dynfklp8t",
    api_key: "761785193975962",
    api_secret: "iNnuk4AkA1z5o9IoQraDmJ6N5tc"
});

module.exports = cloudinary