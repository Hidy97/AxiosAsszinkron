import { adatleiras } from "./adatok.js";

class TablazatModel{
    #leiro
    constructor() {
      this.#leiro = adatleiras
    }

    getLeiro(){
        return this.#leiro
    }
}

export default TablazatModel;