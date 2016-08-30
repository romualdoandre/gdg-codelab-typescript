/// <reference path="typings/node.d.ts"/>
"use strict";
var http = require("http");
function simpleServer(port, message) {
    var upperMessage = message.toUpperCase();
    http.createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>" + upperMessage + "</h1>");
        res.end();
    }).listen(port);
}
exports.simpleServer = simpleServer;
//# sourceMappingURL=server.js.map