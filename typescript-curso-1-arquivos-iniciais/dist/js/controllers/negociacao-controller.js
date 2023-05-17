import { Negociacao } from "../models/negociacao";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = new Negociacao(this.inputData, this.inputQuantidade, this.inputValor);
        console.log(negociacao);
    }
}
