export class Negociacao{
    #data;//essa # coloca a variavel como privado
    #quantidade;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }


}