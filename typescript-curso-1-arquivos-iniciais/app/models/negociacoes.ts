import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel{
    
    private negociacoes:Array<Negociacao> = [];
    //private negociacoes: Negociacao[]; também é um array
    
    public adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }

    /*lista():Array<Negociacao>{
        //return this.negociacoes; retorna o mesmo endereco de memoria e permite que a lista seja alterada
        return [...this.negociacoes];//utilizando expred operator, pega cada item individual e coloca na nova lista
    }*/

    public lista() :ReadonlyArray<Negociacao> {//mesma coisa do ReadonlyArray
        return this.negociacoes;
    }

    public paraTexto() :string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}