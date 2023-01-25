import { View } from "./view.js"
import { Negociacoes } from "../models/negociacoes";

export class NegociacoesView extends View<Negociacoes> {

    constructor(seletor: string) {
        super(seletor);
    }
    
    protected template(model: Negociacoes): string {
        return `
                <table class="table table-bordered">
                    <thead>
                        <tr>            
                            <th>Data</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.listarNegociacoes().map((negociacao) => {
                            return `
                                <tr>
                                    <td>${this.dataTexto(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>
                            `
                        }).join("")}
                    </tbody>
                </table>`;
    }

    private dataTexto(data: Date): string {
        const dataTexto: string = new Intl.DateTimeFormat().format(data);
        return dataTexto;
    }
}