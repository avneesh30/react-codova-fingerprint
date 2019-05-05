cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
    "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
    "pluginId": "cordova-plugin-android-fingerprint-auth",
    "clobbers": [
      "FingerprintAuth"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-fingerprint-login.TouchID",
    "file": "plugins/cordova-plugin-fingerprint-login/www/TouchID.js",
    "pluginId": "cordova-plugin-fingerprint-login",
    "clobbers": [
      "window.plugins.touchid"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-android-fingerprint-auth": "1.5.0",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-fingerprint-login": "0.3.4"
};
// BOTTOM OF METADATA
});