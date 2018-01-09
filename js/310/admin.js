/**
 * Created by vincentchan on 15-06-11.
 */

var JSFtp = require("jsftp");
var appRoot = require("app-root-path");


var ftp = new JSFtp( {
    host: "webftp.vancouver.ca",
    port: 21,
    user: "anonymous",
    pass: "anonymous"

});

var filename = 'parkdata.xml';
var localpath = appRoot + '/data/temp/' + filename;


function download() {
    ftp.get('opendata/xml/parks_facilities.xml', localpath, function(err) {
        if (err) {
            console.error('LOG: There was an error downloading the file [admin.js: ftp.get()]');
        } else {
            console.log('File copied successfully');
        }

    });
};