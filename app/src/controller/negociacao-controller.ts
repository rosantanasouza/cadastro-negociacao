import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new Negociacoes();
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private negociacoesServices = new NegociacoesServices();

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.updateView(this.listaNegociacoes);
    }

    public cadastrarNegociacao(): void {
        const novaNegociacao = Negociacao.novaNegociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        
        if (this.validaDiaUtil(novaNegociacao.data)) {            
            this.listaNegociacoes.adicionarNegociacao(novaNegociacao);            
            this.limparFormulario();
            this.atualizaViewNegociacoes();            
            imprimir(novaNegociacao, this.listaNegociacoes);
        }
        else {
            this.mensagemViewAlerta();
        }
    }

    private validaDiaUtil(data: Date): boolean {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

    private atualizaViewNegociacoes(): void {
        this.negociacoesView.updateView(this.listaNegociacoes);
        this.mensagemView.updateView('Negociação cadastrada com sucesso!');
    }

    private mensagemViewAlerta(): void {
        this.mensagemView.updateView('Apenas dias úteis são aceitos.');
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }

    public importaDados(): void {
        this.negociacoesServices.obterNegociacoesDaApi()
            .then((negociacoesApi) => {
                for (const negociacaoApi of negociacoesApi) {
                    this.listaNegociacoes.adicionarNegociacao(negociacaoApi);
                }
                this.negociacoesView.updateView(this.listaNegociacoes);
            });
    }
}