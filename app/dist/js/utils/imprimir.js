export function imprimir(...objetos) {
    for (const objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
