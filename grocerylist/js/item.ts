namespace Grocery{
    export interface Item{
        descricao: string;
        
    }
    export interface ItemDao{
        adicionar(item: Item): boolean;
        remover(index: number): boolean;
        listar(): Array<Item>;
    }

}