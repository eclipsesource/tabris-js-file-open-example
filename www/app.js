var page = tabris.create("Page", {title: "Tabris.js File Open Example", topLevel: true}).open();
var fileTransfer = new FileTransfer();

var urlInput = tabris.create("TextInput", {
  message: "URL",
  layoutData: {left: "10%", top: "10%", right: "10%"}
}).appendTo(page);

var mimeTypeInput = tabris.create("TextInput", {
  message: "Mime type",
  layoutData: {left: "10%", top: [urlInput, 15], right: "10%"}
}).appendTo(page);

var localFileName = tabris.create("TextInput", {
  message: "Local file name",
  layoutData: {left: "10%", top: [mimeTypeInput, 15], right: "10%"}
}).appendTo(page);

tabris.create("Button", {
  text: "Download",
  layoutData: {top: [mimeTypeInput, 15], centerX: 0}
}).appendTo(page).on("select", function() {
  fileTransfer.download(
    urlInput.get("text"),
    "cdvfile://localhost/temporary/" + localFileName.get("text"),
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
});

function openFile(localPath) {
  cordova.plugins.fileOpener2.open(localPath, mimeTypeInput.get("text"));
}
