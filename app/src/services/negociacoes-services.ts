import { NegociacoesDaApi } from "../interfaces/negociacao-da-api.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {

    constructor() {}
    
    public obterNegociacoesDaApi(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        
        .then((response) => response.json())
        
        .then((dadosApi: NegociacoesDaApi[]) => {
            return dadosApi.map((dadoApi) => {
                return new Negociacao(
                    new Date(), 
                    dadoApi.vezes, 
                    dadoApi.montante)
            });
        });
    } 
}