var mqtt = require('mqtt');
var base64 = require('base64image');
var path = require('path');
// const fs = require('fs');
var desFolder = "C:\\cam-image\\";
var server = mqtt.connect({ host: '103.249.100.48', port: 1883 });
server.subscribe('$client/98542be035414e9fa5c605b7ace00fd4/thingdata/state');
console.log("start");
var imageName = "demo_image"; // default name
server.on('message', async function (topic, message, packet) {
    var msgObj = JSON.parse(message.toString());
    if (msgObj.hasOwnProperty('data')) {
        console.log(typeof msgObj.data);
        console.log(msgObj.data);
        if (msgObj.data.hasOwnProperty('image')) {
            if (msgObj.data.image[0].hasOwnProperty('name')) {
                imageName = msgObj.data.image[0].name;
            } else {
                console.log("No have image name");
            }
            if (msgObj.data.image[0].hasOwnProperty('base')) {
                console.log(imageName);
                var decode_options = { filename: msgObj.data.image[0].name, filePath: __dirname + '\\' + 'gallery/\/' };
                console.log("line 73");
                console.log(__dirname + '\\gallery\\');
                if (imageName == null) {
                    console.log("Name null");
                }
                var imageData = new Buffer.from(msgObj.data.image[0].base, 'base64');
                base64.base64decoder(imageData, decode_options, function (err, saved) {
                    if (err) { console.log(err); }
                    console.log(saved);
                    // imageName = "demo_image"; // rename name default if name null
                });
            } else {
                console.log("No have image base64 property");
            }
        } else {
            console.log("No have image");
        }
    } else {
        console.log("No data lv1");
    }
})