import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController;
const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();//no submit pagina faz o refresh, essa linha cancela
        controller.adiciona();
    });
} else{
    throw Error('Não foi possivel executar a aplicação, verifique se o form existe!');
}

const botaoImportar = document.querySelector('#botao-importar');
if(botaoImportar){
    botaoImportar.addEventListener('click', () => {
        controller.importaDados();
    });
}else{
    throw Error('Botão importar não foi encontrado');
}