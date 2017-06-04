var http = require('http');

var server = http.createServer();

var host = '192.168.0.5';
var port = 3300;
server.listen(port, host, '50000', function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});