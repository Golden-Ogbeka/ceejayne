const multer = require("multer"); //For file upload
const {v4: uuidv4} = require("uuid");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "productImage") {
      cb(null, "uploads/product_images");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + uuidv4().substring(0, 4) + "-" + file.originalname
    );
  },
});
//File FIlter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "productImage") {
    // if uploading product image
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      // check file type to be picture
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  }
};

const upload = multer({storage: storage, fileFilter: fileFilter});

module.exports = upload;
