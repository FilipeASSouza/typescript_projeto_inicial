export class Negociacao{
    #data;
    #quantidade;//# defini que a variavel esteja privado
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}