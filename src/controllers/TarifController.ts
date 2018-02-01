import * as http from 'http';
import * as qs from 'querystring';

export class TarifController {
    private _request : http.IncomingMessage;
    private _response: http.ServerResponse;

    constructor(request : http.IncomingMessage, response: http.ServerResponse)
    {
        this._request = request;
        this._response = response;
    }

    traite()
    {
        if (this._request.method == 'POST') {
            var body = '';
            this._request.on('data', function (data) {
                body += data;
                // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6) { 
                    // FLOOD ATTACK OR FAULTY CLIENT, NUKE this._request
                    this._request.connection.destroy();
                }
            });
            this._request.on('end', function () {
                var POST = qs.parse(body);
                   
                this._response.writeHead(200, { 'Content-Type': 'text/html' });
                this._response.end("ACK !!", 'utf-8');
            });
        }
        else 
        {
            this._response.writeHead(200, { 'Content-Type': 'text/html' });
            this._response.end("Hello !", 'utf-8');
        }
    }
}