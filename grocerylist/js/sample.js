var Grocery;
(function (Grocery) {
    class Main {
        constructor() {
        }
        init(event) {
            console.log("fazendo os bindings");
            let itemDao = new LocalItemDao();
            itemDao.adicionar({ descricao: "rsrs", comprado: false });
            let itens = itemDao.listar();
            for (var i in itens) {
                console.log(i + '\n');
            }
        }
    }
    Grocery.Main = Main;
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
            alert("Registro adicionado.");
            return true;
        }
        remover(index) {
            return false;
        }
        atualizar(index, item) {
            return false;
        }
        listar() {
            return this.itens;
        }
    }
})(Grocery || (Grocery = {}));
/// <reference path="./grocery.ts"/>
/// <reference path="./item.ts"/>
var main = new Grocery.Main();
document.addEventListener('DOMContentLoaded', main.init, false);
