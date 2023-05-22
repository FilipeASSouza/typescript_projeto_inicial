export class Negociacao{

    //simplificando construtor
    constructor(
        readonly data: Date
        , readonly quantidade: number
        , readonly valor: number
        ){}

    get volume():number{
        return this.quantidade * this.valor;
    }
}