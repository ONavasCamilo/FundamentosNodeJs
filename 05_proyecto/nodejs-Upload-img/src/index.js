const express = require("express");
const path = require("path");
const multer = require("multer");

// initializations
const app = express();

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  multer({
    storage,
    dest: path.join(__dirname, "/public/uploads"),
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: Archivo debe ser una imagen valida jpeg|jpg|png|gif");
    },
  }).single("image")
);

app.use(require("./routes/index.routes"));

// hacer directorio publico
// http://localhost:3000/uploads/IMG_20230929_205300.jpg
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
