export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //return this.negociacoes; retorna o mesmo endereco de memoria e permite que a lista seja alterada
        return [...this.negociacoes]; //utilizando expred operator, pega cada item individual e coloca na nova lista
    }
}
