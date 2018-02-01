import * as http from 'http';
import * as qs from 'querystring';

var callNumber = 0;

http.createServer(function(request, response) {
    callNumber += 1;
    console.time(`Call number ${callNumber}`);

    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                request.connection.destroy();
            }
        });
        request.on('end', function () {
            var POST = qs.parse(body);
            // use POST
            console.timeEnd(`Call number ${callNumber}`);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end("ACK !!", 'utf-8');
        });
    }
    else 
    {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end("Hello !", 'utf-8');
    }
}).listen(8125);

console.log('Server running at http://127.0.0.1:8125/');