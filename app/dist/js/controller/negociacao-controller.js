import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new Negociacoes();
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.negociacoesServices = new NegociacoesServices();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.updateView(this.listaNegociacoes);
    }
    cadastrarNegociacao() {
        const novaNegociacao = Negociacao.novaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.validaDiaUtil(novaNegociacao.data)) {
            this.listaNegociacoes.adicionarNegociacao(novaNegociacao);
            imprimir(novaNegociacao, this.listaNegociacoes);
            this.atualizaViewNegociacoes();
            this.limparFormulario();
        }
        else {
            this.mensagemViewAlerta();
        }
    }
    validaDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    atualizaViewNegociacoes() {
        this.negociacoesView.updateView(this.listaNegociacoes);
        this.mensagemView.updateView('Negociação cadastrada com sucesso!');
    }
    mensagemViewAlerta() {
        this.mensagemView.updateView('Apenas dias úteis são aceitos.');
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
    importaDados() {
        this.negociacoesServices.obterNegociacoesDaApi()
            .then((negociacoesApi) => {
            for (const negociacaoApi of negociacoesApi) {
                this.listaNegociacoes.adicionarNegociacao(negociacaoApi);
            }
            this.negociacoesView.updateView(this.listaNegociacoes);
        });
    }
}
