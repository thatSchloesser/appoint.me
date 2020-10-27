const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// is this a performance optimization?
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../dist/index.html'),
  );
});

app.get('/api/test', (req, res) => {
  res.status(200).send('API TEST!!!');
});

// return file that corresponds with route.
app.get('*', (req, res) => {
  const route = req.params['0'].split('/')[1];
  console.log('route:', route);

  fs.readdir(path.join(__dirname, '../dist'), (err, files) => {
    if (err) throw err;
    const fileArray = files.filter((file) => file !== 'index.html');

    if (fileArray.includes(route)) {
      // If the first part of the route is in the files array its
      // either a file or a folder, we try to send them the file in the
      // code below.

      const tempFilePath = path.join(
        __dirname, `../dist/${req.params['0']}`,
      ); // Set the file path

      // Check if file exists. If it does send the file, otherwise send
      // a 404 and console.log an error.
      fs.access(tempFilePath, fs.F_OK, (fsErr) => {
        if (fsErr) {
          console.error(fsErr);
          res.statusCode = 404;
          res.end('Not Found');
        } else {
          res.sendFile(tempFilePath);
        }
      });
    } else {
      // Otherwise route to React website.
      // COULD handle 404 NOT FOUND here... but easier to do with react-router
      res.sendFile(
        path.join(__dirname, '../dist/index.html'),
      ); // NOTE: this will send a request for bundle.js, which is handled above.
    }
  });
});

app.listen(8080);
