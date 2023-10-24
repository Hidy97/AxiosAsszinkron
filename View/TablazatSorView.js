class TablazatSorView{
    #adat
    constructor(adat, szuloElem) {
        this.szuloElem = szuloElem
        this.#adat = adat
        this.#sor()
        console.log(this.#lista)
    }

    #sor(){
        let txt = "";
        txt += "<tr>";

        for (const key in this.#adat) {
            const element = this.#adat[key];
            txt += `<td>${element}</td>`;
        }

        txt += "</tr>";
        this.szuloElem.append(txt);
    }
}

export default TablazatSorView;