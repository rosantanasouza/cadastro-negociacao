import { View } from "./view.js";
export class NegociacoesView extends View {
    constructor(seletor) {
        super(seletor);
    }
    template(model) {
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
                            `;
        }).join("")}
                    </tbody>
                </table>`;
    }
    dataTexto(data) {
        const dataTexto = new Intl.DateTimeFormat().format(data);
        return dataTexto;
    }
}
