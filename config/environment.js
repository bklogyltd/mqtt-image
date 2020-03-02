// module.exports = {
//   port: process.env.PORT,
//   MONGO_URI: process.env.MONGO_URI,
//   xaddr: process.env.xaddr,
//   user: process.env.user,
//   pass: process.env.pass,
//   file_path: process.env.file_path,
//   streamUrl: process.env.streamUrl,
//   wsPort: process.env.wsPort,
//   broker_host: process.env.broker_host, 
//   broker_port: process.env.broker_port, 
//   topic: process.env.topic  
// };

module.exports = {
    port: 3002,
    MONGO_URI: 'mongodb://localhost:30001,localhost:30002,localhost:30003/db?replicaSet=rs0',
    xaddr: 'http://192.168.1.120:80/onvif/device_service',
    user: 'admin',
    pass: '',
    file_path: 'D:\/Work_Space\/BKLOGY_PROJECT\/system-cam\/camera_module\/gallery\/',
    streamUrl: 'rtsp://admin:@192.168.1.120:80/ch0_0.264',
    wsPort: 9001,
    broker_host: '103.249.100.48',
    broker_port: 1883,
    topic: '$client/camera/command',
};