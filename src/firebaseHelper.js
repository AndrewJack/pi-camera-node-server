// TODO: WIP
/* eslint-disable no-console */
import gcloud from 'gcloud';
import conf from './config';

const gcs = gcloud.storage({
  projectId: conf.get('firebase:projectId'),
  serviceAccount: conf.get('firebase:serviceAccount'),
});
const bucket = gcs.bucket(conf.get('firebase:storageBucket'));

export default function uploadFile(fileName) {
  bucket.upload(`./captures/${fileName}`, (err, file) => {
    if (!err) {
      console.log(`File saved as ${file}`);
    }
  });
}
