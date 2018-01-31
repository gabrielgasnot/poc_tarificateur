import * as http from 'http';

http.createServer(function(request, response) {
    console.log('request', request.url);
});