import http from 'http';
import { buildCamera } from './cameraHelper'

const hostname = '127.0.0.1';
const port = 3000;

let opts = {
  mode: 'photo',
  encoding: 'jpg'
}
opts.output = './captures/' + moment().format() + fileExtension;

const camera = buildCamera(opts);

const server = http.createServer((req, res) => {

  // Take picture
  camera.start();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello From a PI\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
