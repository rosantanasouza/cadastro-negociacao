export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionarNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listarNegociacoes() {
        return this._negociacoes;
    }
    paraTexto() {
        return `
            ${JSON.stringify(this._negociacoes, null, 2)}
        `;
    }
}
