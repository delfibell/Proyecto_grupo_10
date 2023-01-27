const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  //recibe un objeto literal compuesto de dos metodos, destination y filename
  destination: function (req, file, cb) {
    cb(null, "./public/img/catalogo");
  },
  filename: (req, file, cb) => {
    const newFilename =
      "product-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const uploadFile = multer({ storage });

module.exports = uploadFile;
