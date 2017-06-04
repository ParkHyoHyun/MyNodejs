var fs = require('fs');

fs.open('./information.txt', 'w', function(err, fd) {
    if(err) throw err;

    var buf = new Buffer('이름:박효현\n나이:25\n전화번호:01091925745', 'utf8');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;

       // console.log(err, written, buffer);

         fs.close(fd, function() {
            console.log('파일에서 읽은 데이터 : \n%s', buffer.toString());
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
         });
    });
});
/*
fs.open('./information.txt', 'r', function(err, fd) {
    if(err) throw err;

        fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
            if(err) throw err;

            var inStr = buffer.toString('utf8', 0, bytesRead);
            console.log('파일에서 읽은 데이터 : %s', inStr);

        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});

*/