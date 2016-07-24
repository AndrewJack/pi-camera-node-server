import nconf from 'nconf';

nconf.argv().env();
nconf.file({ file: 'config/default.json' });
nconf.file({ file: '../config/prod.json' });

module.exports = nconf;
