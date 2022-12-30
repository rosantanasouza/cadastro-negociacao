import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    cadastrarNegociacao() {
        const novaNegociacao = Negociacao.novaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(novaNegociacao);
        this.listaNegociacoes.adicionarNegociacao(novaNegociacao);
        console.log(this.listaNegociacoes.listarNegociacoes());
    }
}
