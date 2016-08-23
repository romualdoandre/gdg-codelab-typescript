var Grocery;
(function (Grocery) {
    class LocalItemDao {
        constructor() {
            let tbItens = localStorage.getItem("itens"); // Recupera os dados armazenados
            this.itens = JSON.parse(tbItens); // Converte string para objeto
            if (this.itens == null)
                this.itens = [];
        }
        adicionar(item) {
            this.itens.push(item);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            return true;
        }
        remover(index) {
            this.itens.splice(index, 1);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            alert("Registro excluído.");
            return true;
        }
        listar() {
            return this.itens;
        }
    }
    Grocery.LocalItemDao = LocalItemDao;
})(Grocery || (Grocery = {}));
/// <reference path="./grocery.ts"/>
/// <reference path="./item.ts"/>
var Controller;
(function (Controller) {
    var dao = new Grocery.LocalItemDao();
    function init(evt) {
        listar();
        document.getElementById("adicionar").addEventListener("click", adicionar, false);
    }
    Controller.init = init;
    function adicionar(evt) {
        let desc = document.getElementById("descricao").value;
        if (desc != "") {
            dao.adicionar({ descricao: desc });
            document.getElementById("descricao").value = "";
        }
        else {
            alert("Preencha os dados");
        }
        listar();
    }
    function remover(evt) {
        if (confirm("Certeza?")) {
            dao.remover(this.getAttribute("alt"));
            listar();
        }
    }
    function listar() {
        let innerHtml = "";
        let lista = dao.listar();
        for (var i in lista) {
            innerHtml = innerHtml.concat(`<tr id="item-${i}">`);
            innerHtml = innerHtml.concat(`<td>${i}</td>`);
            innerHtml = innerHtml.concat(`<td>${lista[i].descricao}</td>`);
            innerHtml = innerHtml.concat(`<td><a class=\"pure-button pure-button-secundary remover\" alt=\"${i}\" href=\"#\">Remover</a></td>`);
            innerHtml = innerHtml.concat("</tr>");
        }
        document.getElementById("lista").innerHTML = innerHtml;
        let nodeList = document.querySelectorAll(".remover");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener("click", remover);
        }
    }
    function comprado() {
        document.getElementById("item-" + this.getAttribute("alt")).style.textDecoration = "line-through";
    }
})(Controller || (Controller = {}));
document.addEventListener('DOMContentLoaded', Controller.init, false);
