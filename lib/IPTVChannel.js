var Channel = require('./Channel.js');
var Settings = require('./Settings');


class IPTVChannel extends Channel {

constructor(gname,gnumber) {
    super(gname,gnumber);
    this.GuideName = gname;
    this.GuideNumber = gnumber;
    this.HD = true;
    this.ScanInterval = 120;
}

InitializeChannel() {
    if (this.HasPlaylist(this.ScanInterval)) {
        console.log("Already have playlist URL for channel %s", this.GuideName);
        this.Ready();
        return true;
    }

    if (this.Scanning && this.SkipScan) {
        console.log("Scanning is disabled for %s", this.GuideName);
        this.Ready();
        return true;
    }
}



}
module.exports = IPTVChannel;
