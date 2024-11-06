
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;



const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, 
}).array('files', 10);


app.post('/api/upload', upload, (req, res) => {
  console.log(req.files);
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }


  res.json({
    files: req.files.map(file => ({
      filename: file.originalname,
      extension: path.extname(file.originalname),
    })),
    count: req.files.length, 
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
