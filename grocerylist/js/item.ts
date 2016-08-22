namespace Grocery{
    export interface Item{
        descricao: string;
        comprado: boolean;
        
    }
    export interface ItemDao{
        adicionar(item: Item): boolean;
        remover(index: number): boolean;
        atualizar(index:number, item: Item): boolean;
        listar(): Array<Item>;
    }

}