const express = require('express');
const morgan = require('morgan');
const Settings = require('./lib/Settings.js');
const Scanner = require('./lib/Scanner.js');
const HTTPRequestHandler = require('./lib/HTTPRequestHandler.js');
const HDHomeRun = require('./lib/HDHomeRun.js');

const settings = new Settings();
const deviceConfig  = settings.GetConfig("device");

const http = express();
const http_port = 4000;
const media_port = 5004;

const HDHomeRunServer = new HDHomeRun({ settings: settings });
HDHomeRunServer.MultiCast();
HDHomeRunServer.ControlServer();


const httpRequest = new HTTPRequestHandler({ settings: settings });

let tuners = [];
for(let i=0; i<deviceConfig.TunerCount; i++) {
    tuners.push(`/tuner${i}/:channelNum`);
}
http.use(express.static('static'));
http.use(morgan('dev'));
http.get('/lineup.json', httpRequest.Lineup); // OK
http.get('/lineup_status.json', httpRequest.LineupStatus); // OK
http.post('/lineup_status.json', httpRequest.LineupStatus); // OK
http.post('/lineup.post', httpRequest.Scan);
http.get('/discover.json', httpRequest.Discover); // OK???

// w funkcji Play nastepuje jakoś przyporządkowanie :channelNum do odpowiedniego streamu
http.get('/stream/:channelNum', httpRequest.Play);
http.get('/auto/:channelNum', httpRequest.Play);
http.get(tuners, httpRequest.Play);



http.listen(http_port, () => {
  console.log("HTTP server started listening on port %d", http_port);
});

http.listen(media_port, () => {
    console.log("MEDIA Server started listening on port %d", media_port);
});
