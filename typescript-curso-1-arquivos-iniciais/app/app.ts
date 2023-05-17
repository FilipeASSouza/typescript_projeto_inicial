import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController;
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();//no submit pagina faz o refresh, essa linha cancela
    controller.adiciona();
});