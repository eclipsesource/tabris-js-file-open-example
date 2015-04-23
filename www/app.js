tabris.create("Page", {title: "Tabris.js File Open Example", topLevel: true}).open();
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://eclipsesource.com/fileadmin/images/es-logo.png");

fileTransfer.download(
  uri,
  "cdvfile://localhost/temporary/es-logo.png",
  function(entry) {
    openFile(entry.toURL());
  },
  function(error) {
    console.log("download error source " + error.source);
    console.log("download error target " + error.target);
    console.log("upload error code" + error.code);
  },
  false
);

function openFile(localPath) {
  cordova.plugins.fileOpener2.open(localPath, "image/png");
}