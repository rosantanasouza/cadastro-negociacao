import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
    }

    public cadastrarNegociacao(): void {
        const novaNegociacao = Negociacao.novaNegociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        console.log(novaNegociacao); //Exibindo a negociação criada.
        this.listaNegociacoes.adicionarNegociacao(novaNegociacao); //Adicionando a negociação na lista de negociações.
        console.log(this.listaNegociacoes.listarNegociacoes()); //Exibindo a lista atualizada das negociações.

    }

    /* CRIAR MÉTODO PARA LIMPAR FORMULÁRIO */

    /* CRIAR MÉTODO PARA VALIDAR DATA(APENAS SEGUNDA A SEXTA) ANTES DE INSERIR O OBJETO NEGOCIAÇÃO NA LISTA DE NEGOCIAÇÕES */
}