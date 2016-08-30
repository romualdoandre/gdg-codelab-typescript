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
        var desc = document.getElementById("descricao").value;
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
        var innerHtml = "";
        var lista = dao.listar();
        for (var i in lista) {
            innerHtml = innerHtml.concat("<tr id=\"item-" + i + "\">");
            innerHtml = innerHtml.concat("<td>" + i + "</td>");
            innerHtml = innerHtml.concat("<td>" + lista[i].descricao + "</td>");
            innerHtml = innerHtml.concat("<td><a class=\"pure-button pure-button-secundary remover\" alt=\"" + i + "\" href=\"#\">Remover</a></td>");
            innerHtml = innerHtml.concat("</tr>");
        }
        document.getElementById("lista").innerHTML = innerHtml;
        var nodeList = document.querySelectorAll(".remover");
        for (var i_1 = 0; i_1 < nodeList.length; i_1++) {
            nodeList[i_1].addEventListener("click", remover);
        }
    }
    function comprado() {
        document.getElementById("item-" + this.getAttribute("alt")).style.textDecoration = "line-through";
    }
})(Controller || (Controller = {}));
document.addEventListener('DOMContentLoaded', Controller.init, false);
//# sourceMappingURL=app.js.map