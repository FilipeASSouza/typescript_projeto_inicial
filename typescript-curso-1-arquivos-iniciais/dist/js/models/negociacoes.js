export class Negociacoes {
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /*lista():Array<Negociacao>{
        //return this.negociacoes; retorna o mesmo endereco de memoria e permite que a lista seja alterada
        return [...this.negociacoes];//utilizando expred operator, pega cada item individual e coloca na nova lista
    }*/
    lista() {
        return this.negociacoes;
    }
}
