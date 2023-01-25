import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
    
    private _negociacoes: Negociacao[];

    constructor() {
        this._negociacoes = [];
    }

    public adicionarNegociacao(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this._negociacoes;
    }

    public paraTexto(): string {
        return `
            Lista de Negociacoes:
            ${JSON.stringify(this._negociacoes, null, 2)}
        `
    }
}