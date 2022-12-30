export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    public get data(): Date {
        return this._data;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get valor(): number {
        return this._valor;
    }

    public static novaNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const data: Date = new Date(dataString.replace(/-/g, ','));
        const quantidade: number = parseInt(quantidadeString);
        const valor: number = parseInt(valorString);

        const negociacao = new Negociacao(data, quantidade, valor);
        return negociacao;
    }
}