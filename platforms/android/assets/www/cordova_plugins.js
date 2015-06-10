cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.teamnemitoff.phonedialer/www/dialer.js",
        "id": "com.teamnemitoff.phonedialer.phonedialer",
        "merges": [
            "phonedialer"
        ]
    },
    {
        "file": "plugins/com.native5.plugins.datepicker/scripts/datePickerPlugin.js",
        "id": "com.native5.plugins.datepicker.datePicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/com.native5.plugins.datepicker/scripts/share.js",
        "id": "com.native5.plugins.datepicker.share",
        "clobbers": [
            "share"
        ]
    },
    {
        "file": "plugins/com.sharinglabs.cordova.plugin.datepicker/www/android/DatePicker.js",
        "id": "com.sharinglabs.cordova.plugin.datepicker.DatePicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.4",
    "cordova-plugin-console": "1.0.0",
    "cordova-plugin-device": "1.0.0",
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "com.teamnemitoff.phonedialer": "0.3.0",
    "com.native5.plugins.datepicker": "0.1.1",
    "com.sharinglabs.cordova.plugin.datepicker": "1.1.3",
    "com.phonegap.plugins.PushPlugin": "2.4.0"
}
// BOTTOM OF METADATA
});