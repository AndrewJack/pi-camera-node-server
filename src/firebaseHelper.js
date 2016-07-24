// TODO: WIP
/* eslint-disable no-console */
import gcloud from 'gcloud';
import conf from './config';

const gcs = gcloud.storage({
  projectId: conf.get('firebase:projectId'),
  keyFilename: conf.get('firebase:keyFilename'),
});
const bucket = gcs.bucket(conf.get('firebase:storageBucket'));

export default function uploadFile(fileName) {
  bucket.upload(`captures/${fileName.replace('~', '')}`, (err, file) => {
    if (!err) {
      console.log(`File saved as ${file}`);
    } else {
      console.warn(`Error: ${err}`);
    }
  });
}
