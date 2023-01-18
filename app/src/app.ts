import { NegociacaoController } from "./controller/negociacao-controller.js";

const negociacaoController = new NegociacaoController();
const formulario = document.querySelector('#formulario') as HTMLFormElement;
const botao = document.querySelector("#botao-importa") as HTMLButtonElement;

botao.addEventListener('click', () => {
    negociacaoController.importaDados();
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();    
    negociacaoController.cadastrarNegociacao();
});
