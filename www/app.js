tabris.create("Page", {title: "Tabris.js File Open Example", topLevel: true}).open();
var uri = encodeURI("http://eclipsesource.com/fileadmin/images/es-logo.png");

var onSuccess = function(data) {
  alert('message: ' + data.message);
};

function onError(error) {
  alert('message: ' + error.message);
}

window.cordova.plugins.FileOpener.openFile(uri, onSuccess, onError);
