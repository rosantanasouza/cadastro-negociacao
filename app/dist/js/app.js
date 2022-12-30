import { NegociacaoController } from "./controller/negociacao-controller.js";
const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    negociacaoController.cadastrarNegociacao();
});
