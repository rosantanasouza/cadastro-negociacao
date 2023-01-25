import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
    for (const objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}