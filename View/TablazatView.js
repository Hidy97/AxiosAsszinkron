import TablazatSorView from "../View/TablazatSorView.js";

class TablazatView {
    #leiro = {}
    #list = [];
    #tablaElemLista = []

    constructor(szuloElem, list) {
        this.#leiro = list;
        //this.#list = list;
        this.szuloElem = szuloElem;

        szuloElem.append(`<table class="table table-bordered table-striped">`);
        this.tablaElem = szuloElem.children("table");
        this.#tablaLetrehoz()
    }

    #tablaLetrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    this.#tablaElemLista.push(new TablazatSorView(key, this.#list[key], this.tablaElem))
                    break;
                case "number":
                    this.#tablaElemLista.push(new TablazatSorView(key, this.#list[key], this.tablaElem))
                    break;
                default:
                    break;
            }
        }
        let txt = `<tr>`;
        this.tablaElem.append(txt);
    }

}

export default TablazatView;