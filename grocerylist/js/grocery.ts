namespace Grocery {
    export class LocalItemDao implements ItemDao {
        itens: Array<Item>;
        constructor(){
            let tbItens = localStorage.getItem("itens");// Recupera os dados armazenados
            this.itens = JSON.parse(tbItens); // Converte string para objeto
            if(this.itens == null) // Caso não haja conteúdo, iniciamos um vetor vazio
                this.itens = [];
        }

        adicionar(item: Item): boolean{
            
            this.itens.push(item);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            return true;
        }
        remover(index: number): boolean{
            this.itens.splice(index, 1);
            localStorage.setItem("itens", JSON.stringify(this.itens));
            alert("Registro excluído.");
            return true;
        }
        listar(): Array<Item>{
            return this.itens;
        }
    }
}