export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    static novaNegociacao(dataString, quantidadeString, valorString) {
        const data = new Date(dataString.replace(/-/g, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    paraTexto() {
        return `
            Objeto Negociacao Criado:
            Data: ${this._data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
        `;
    }
}
