// Empty constructor
var exec = require('cordova/exec');

function UpdatePlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
UpdatePlugin.prototype.update = function(successCallback, errorCallback, config) {
  exec(successCallback, errorCallback, 'UpdatePlugin', 'update', [{ 'flexibleUpdateStalenessDays': config.flexibleUpdateStalenessDays, 'immediateUpdateStalenessDays': config.immediateUpdateStalenessDays }]);
}

// Installation constructor that binds updatePlugin to window
UpdatePlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.updatePlugin = new UpdatePlugin();
  return window.plugins.updatePlugin;
};

cordova.addConstructor(UpdatePlugin.install);