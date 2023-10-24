class TablazatSorView {
    #key
    #adatleiro = {}
    constructor(key, adatleiro, szuloElem) {
        this.#key = key
        this.#adatleiro = adatleiro
        this.tablaElem = szuloElem
        this.#sor()
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.pipaGomb = this.sorElem.children("td").children(".kesz");
        //console.log(this.pipaGomb);
        this.torolGomb = this.sorElem.children("td").children(".torol");
        this.megseGomb = this.sorElem.children("td").children(".megse");

        this.pipaGomb.on("click", () => {
            //console.log(this);
            this.sorElem.css("background-color", "teal");
        });

        this.torolGomb.on("click", () => {
            //console.log(this);
            //this.sorElem.empty(this);
            this.#esemenyTrigger("torles");
        });

        this.megseGomb.on("click", () => {
            //console.log(this);
            this.sorElem.css("background-color", "white");
        });
    }

    #sor() {
        let txt = "";
        txt += "<tr>";
        for (const key in this.#adatleiro) {
                    const element = this.#adatleiro[key];
                    txt += `<td>${element}</td>`;
            }
        txt += `<td><span class="kesz">✔️</span><span class="megse">❌</span><span class="torol">🗑️</span></td>`
        txt += "</tr>";
        this.tablaElem.append(txt);
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail: this});
        window.dispatchEvent(esemenyem);
    }
}

export default TablazatSorView;