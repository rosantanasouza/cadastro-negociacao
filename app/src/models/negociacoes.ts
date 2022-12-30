import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adicionarNegociacao(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}