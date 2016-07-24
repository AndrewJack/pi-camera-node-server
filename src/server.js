import http from 'http';
import moment from 'moment';
import buildCamera from './cameraHelper';
import config from './config';

// Initialize firebase
// setupFirebase('https://firebaseurl.com');

// Initialize camera
const opts = {
  mode: 'photo',
  encoding: 'jpg',
};

const server = http.createServer((req, res) => {
  // Take picture
  opts.output = `./captures/${moment().format()}.jpg`;
  const camera = buildCamera(opts, (err, timestamp, fileName) => {
    console.log(`picture captured ${fileName}`);
  });
  camera.start();

  res.statusCode = 200; // eslint-disable-line no-param-reassign
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello From a PI\n');
});

console.log(`Server will run at http://${config.host}:${config.port}/`);
server.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`);
});
