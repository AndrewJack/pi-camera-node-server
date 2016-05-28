import http from 'http';
import RaspiCam from 'raspicam';

const hostname = '127.0.0.1';
const port = 3000;

const camera = new RaspiCam({
  mode: 'photo',
  output: './captures/%d',
  encoding: 'jpg'
 });

http.createServer((req, res) => {

  camera.start();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello From a PI\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
