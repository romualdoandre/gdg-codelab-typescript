/// <reference path="node.d.ts"/>
var http = require("http");
function simpleServer(port, message) {
    http.createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>" + message + "</h1>");
        res.end();
    }).listen(port);
}
exports.simpleServer = simpleServer;
