var mqtt = require('mqtt');
var base64 = require('base64image');
var path = require('path');
const fs = require('fs');
var desFolder = "C:\\Work_Space\\system-cam\\server\\gallery\\";
//const db = require('./models/mongo/mongoose')

//var mongoose = require('mongoose');
//var server_db = mongoose.model('Server');
var sub_topic = "demo";

var server = mqtt.connect({ host: '192.168.1.232', port: 1883 });
console.log("start connect to server");
server.subscribe(sub_topic);
console.log("Subscribed topic:",sub_topic);
console.log("Waiting for new image:");
var imageName = "demo_image"; // default name

server.on('message', async function (topic, message, packet) {
    var msgObj = JSON.parse(message.toString());
    if (msgObj.hasOwnProperty('data')) {
    //    console.log("Line 17");
    //    console.log(typeof msgObj.data);
    //    var s = new server_db({
    //        data: msgObj.data
    //    });
    //    s.save(function (err, x) {
    //        if (err) return console.error(err);
    //        console.log("Saved");
    //    });
        if (msgObj.data.data[0].hasOwnProperty('image')) {
			console.log("...........Received data has image:");
            if (msgObj.data.data[0].image.hasOwnProperty('name')) {
                imageName = msgObj.data.data[0].image.name;
                console.log(typeof imageName);
                imageName = JSON.stringify(imageName);
                console.log(imageName);
                console.log(typeof imageName);
                
            } else {
                console.log("No have image name");
            }
            if (msgObj.data.data[0].image.hasOwnProperty('base')) {
                var decode_options = { filename: imageName, filePath: './gallery/' };
                if (imageName == null) {
                    console.log("Name null");
                }
                var imageData = new Buffer.from(msgObj.data.data[0].image.base, 'base64');
                // console.log("=================================================================");
                // console.log(imageData);
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