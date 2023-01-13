import { View } from "./view.js"
import { Negociacoes } from "../models/negociacoes";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return ``;
    }

}