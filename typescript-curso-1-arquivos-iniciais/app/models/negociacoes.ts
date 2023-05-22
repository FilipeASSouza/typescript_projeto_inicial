import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes:Array<Negociacao> = [];
    private negociacoes: Negociacao[]; //também é um array
    
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    /*lista():Array<Negociacao>{
        //return this.negociacoes; retorna o mesmo endereco de memoria e permite que a lista seja alterada
        return [...this.negociacoes];//utilizando expred operator, pega cada item individual e coloca na nova lista
    }*/

    lista(): readonly Negociacao[] {//mesma coisa do ReadonlyArray
        return this.negociacoes;
    }
}