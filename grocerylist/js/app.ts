/// <reference path="./grocery.ts"/>
/// <reference path="./item.ts"/>
module Controller{
    var dao=new Grocery.LocalItemDao();
    export function init(evt: any){
        listar();
        document.getElementById("adicionar").addEventListener("click",adicionar,false);
    }

    function adicionar(evt: any): void{
        let desc=document.getElementById("descricao").value;
        if(desc!=""){
            dao.adicionar({descricao:desc});
            document.getElementById("descricao").value="";
        }
        else{
            alert("Preencha os dados");
        }
        listar();
    }

    function remover(evt: Event): void{
        if(confirm("Certeza?")){
            dao.remover(this.getAttribute("alt"));
            listar();
        }
    }

    function listar(): void{
        let innerHtml="";
        let lista=dao.listar();
        for(var i in lista){
            innerHtml=innerHtml.concat(`<tr id="item-${i}">`);
            innerHtml=innerHtml.concat(`<td>${i}</td>`);
            innerHtml=innerHtml.concat(`<td>${lista[i].descricao}</td>`);
            innerHtml=innerHtml.concat(`<td><a class=\"pure-button pure-button-secundary remover\" alt=\"${i}\" href=\"#\">Remover</a></td>`);
            innerHtml=innerHtml.concat("</tr>");
        }
        
        document.getElementById("lista").innerHTML=innerHtml;
        let nodeList=document.querySelectorAll(".remover");
        for(let i=0;i<nodeList.length;i++){
            nodeList[i].addEventListener("click",remover);
        }
    }

    function comprado(): void{
        document.getElementById("item-"+this.getAttribute("alt")).style.textDecoration="line-through";
    }
}
document.addEventListener('DOMContentLoaded',Controller.init , false);