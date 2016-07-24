import http from 'http';
import uuid from 'uuid';
import buildCamera from './cameraHelper';
import config from './config';
import uploadFile from './firebaseHelper';

const opts = {
  mode: 'photo',
  encoding: 'jpg',
};

function onPictureCaptured(err, timestamp, fileName) {
  console.log(`picture captured ${fileName}`);
  uploadFile(fileName);
}

const server = http.createServer((req, res) => {
  // Take picture
  opts.output = `./captures/${uuid.v4()}.jpg`;
  const camera = buildCamera(opts, onPictureCaptured);
  camera.start();

  res.statusCode = 200; // eslint-disable-line no-param-reassign
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello From a PI\n');
});

const host = config.get('server:host');
const port = config.get('server:port');
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
