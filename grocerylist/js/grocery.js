var Grocery;
(function (Grocery) {
    var LocalItemDao = (function () {
        function LocalItemDao() {
            var tbItens = localStorage.getItem("itens"); // Recupera os dados armazenados
            this.itens = JSON.parse(tbItens); // Converte string para objeto
            if (this.itens == null)
                this.itens = [];
        }
        LocalItemDao.prototype.adicionar = function (item) {
            this.itens.push(item);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            return true;
        };
        LocalItemDao.prototype.remover = function (index) {
            this.itens.splice(index, 1);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            alert("Registro excluído.");
            return true;
        };
        LocalItemDao.prototype.listar = function () {
            return this.itens;
        };
        return LocalItemDao;
    }());
    Grocery.LocalItemDao = LocalItemDao;
})(Grocery || (Grocery = {}));
//# sourceMappingURL=grocery.js.map