import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel{

    public static criaDe(dataString :string, quantidadeString :string, valorString :string):Negociacao{
        const exp = /-/g; //expressao regular
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto() :string{
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }

    //simplificando construtor
    constructor(
        private _data: Date,
        readonly quantidade: number,
        readonly valor: number
        ){
            super();
        }

    get data():Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume():number{
        return this.quantidade * this.valor;
    }
}