import { NegociacaoController } from "./controller/negociacao-controller.js";

const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('#formulario') as HTMLFormElement;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();   
    negociacaoController.cadastrarNegociacao();
})
