import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    public adicionarNegociacao(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this._negociacoes;
    }

    public paraTexto(): string {
        return `
            ${JSON.stringify(this._negociacoes, null, 2)}
        `
    }
}