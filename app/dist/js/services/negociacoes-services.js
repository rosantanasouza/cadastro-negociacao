import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoesDaApi() {
        return fetch('http://localhost:8080/dados')
            .then((response) => response.json())
            .then((dadosApi) => {
            return dadosApi.map((dadoApi) => {
                return new Negociacao(new Date(), dadoApi.vezes, dadoApi.montante);
            });
        });
    }
}
