import { NegociacaoController } from "./controller/negociacao-controller.js";
const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('#formulario');
const botao = document.querySelector("#botao-importa");
botao.addEventListener('click', () => {
    negociacaoController.importaDados();
});
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    negociacaoController.cadastrarNegociacao();
});
