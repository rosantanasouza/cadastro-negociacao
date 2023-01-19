export function imprimir(...objetos: any[]) {
    for (const objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}