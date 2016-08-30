/// <reference path="typings/node.d.ts"/>

import * as http from "http";

export function simpleServer(port:number,message: string){
    let upperMessage=message.toUpperCase();
    http.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>${upperMessage}</h1>`);
        res.end();
    }).listen(port);
}