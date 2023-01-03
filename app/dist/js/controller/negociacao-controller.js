import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new Negociacoes();
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    cadastrarNegociacao() {
        const novaNegociacao = Negociacao.novaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.validaDiaUtil(novaNegociacao.data)) {
            console.log(novaNegociacao);
            this.listaNegociacoes.adicionarNegociacao(novaNegociacao);
            console.log(this.listaNegociacoes.listarNegociacoes());
            this.limparFormulario();
        }
        else {
            this.mensagemView.updateView('Apenas dias úteis são aceitos.');
        }
    }
    validaDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}
