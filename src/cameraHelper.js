import RaspiCam from 'raspicam';
import moment from 'moment';

export function buildCamera(opts) {
  const camera = new RaspiCam(opts);

  // doing single photo
  camera.on('exit', function () {
    console.log('camera exit photo', moment().format());
    res.json({
      filename: opts.output
    });
  });

  camera.on('start', function () {
    console.log('camera start', moment().format());
  });

  camera.on('stop', function () {
    console.log('camera stop ', moment().format());
  });

  camera.on('read', function (err, timestamp, filename) {
    console.log('camera read ', moment().format(), filename);
  });

  camera.on('error', function (er) {
    console.error(er.stack);
  });

  return camera;
}
