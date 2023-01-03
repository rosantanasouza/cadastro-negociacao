import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new Negociacoes();
    private mensagemView = new MensagemView('#mensagemView');

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
        
        if (this.validaDiaUtil(novaNegociacao.data)) {            
            console.log(novaNegociacao); //Exibindo a negociação criada.
            this.listaNegociacoes.adicionarNegociacao(novaNegociacao); //Adicionando a negociação criada na lista de negociações.
            console.log(this.listaNegociacoes.listarNegociacoes()); //Exibindo a lista atualizada das negociações.
            this.limparFormulario();
        } else {            
            this.mensagemView.updateView('Apenas dias úteis são aceitos.');
        }        
    }

    private validaDiaUtil(data: Date): boolean {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}