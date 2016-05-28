import http from 'http';
import moment from 'moment';
import { buildCamera } from './cameraHelper'
import { setupFirebase, uploadFile } from './firebaseHelper';

const hostname = '127.0.0.1';
const port = 3000;

// Initialize firebase
// setupFirebase('https://firebaseurl.com');

// Initialize camera
let opts = {
  mode: 'photo',
  encoding: 'jpg'
}
const server = http.createServer((req, res) => {

  // Take picture
  opts.output = './captures/' + moment().format() + '.jpg';
  const camera = buildCamera(opts, (err, timestamp, fileName) => {
    console.log('picture captured' + fileName);
  });
  camera.start();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello From a PI\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
