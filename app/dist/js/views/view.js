export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    updateView(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
