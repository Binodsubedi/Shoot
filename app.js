const express = require('express');

const app = express();

const cors = require('cors');

const multer = require('multer');

const { diskStorage } = multer;

app.use(cors());

app.use(express.json());

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(file);
    const filetype = file.mimetype.split('/')[1];
    if (filetype == 'jpeg' || filetype == 'png' || filetype == 'jpg') {
      cb(null, './files/photos');
    } else {
      cb(null, './files/videos');
    }
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage: multerStorage,
});

const allUpload = upload.single('file');

app.post('/', (req, res) => {
  const { body } = req;

  res.status(200).json(body);
});

app.post('/file', allUpload, (req, res) => {
  //   console.log(req.file);
  res.status(201).json({
    status: 'success',
    name: req.file.filename,
  });
});

app.get('/filedownload/photo/:name', (req, res) => {
  const { name } = req.params;
  res.download(`./files/photos/${name}`);
});

app.get('/filedownload/video/:name', (req, res) => {
  const { name } = req.params;
  res.download(`./files/videos/${name}`);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}.........`);
});
