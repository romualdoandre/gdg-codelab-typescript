/// <reference path="node.d.ts"/>

import * as http from "http";

export function simpleServer(port:number,message: string){
    http.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>${message}</h1>`);
        res.end();
    }).listen(port);
}