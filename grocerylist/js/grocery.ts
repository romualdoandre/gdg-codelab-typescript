namespace Grocery {
    export class Main {
        
        constructor() {
            
        }

        init(event: any) {
            console.log("fazendo os bindings");
            let itemDao=new LocalItemDao();
            itemDao.adicionar({descricao:"rsrs",comprado:false});
            let itens=itemDao.listar();
            for(var i in itens){
                console.log(i+'\n');
            }
        }
    }

    class LocalItemDao implements ItemDao {
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
            alert("Registro adicionado.");
            return true;
        }
        remover(index: number): boolean{
            return false;
        }
        atualizar(index:number, item: Item): boolean{
            return false;
        }
        listar(): Array<Item>{
            return this.itens;
        }
    }
}