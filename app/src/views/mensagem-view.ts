import { View } from "./view.js";

export class MensagemView extends View<string> {
    
    public template(model: string): string {
        return `<p class="alert alert-success text-center" role="alert">${model}</p>`

        //COR DA MENSAGEM VERMELHA PARA ALERTAS E VERDE PARA TRANSAÇÕES REALIZADAS COM SUCESSO.
    }
}