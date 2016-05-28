import RaspiCam from 'raspicam';
import moment from 'moment';

export function buildCamera(opts, onRead) {
  const camera = new RaspiCam(opts);

  // doing single photo
  camera.on('exit', () => {
    console.log('camera exit photo', moment().format());
  });

  camera.on('start', () => {
    console.log('camera start', moment().format());
  });

  camera.on('stop', () => {
    console.log('camera stop ', moment().format());
  });

  camera.on('read', (err, timestamp, filename) => {
    console.log('camera read ', moment().format(), filename);
    onRead(err, timestamp, filename);
  });

  camera.on('error', (er) => {
    console.error(er.stack);
  });

  return camera;
}
