import AdatModel from "../Model/AdatModel.js";
import AdatView from "../View/AdatView.js";
import DataService from "../Model/DataService.js";
import HibaView from "../View/HibaView.js";

class AdatController {

    constructor() {
        //console.log("Constr")
        this.DATASERVICE = new DataService()
        this.DATASERVICE.getData("../vegpont_gyakorlas/adat.json", this.adatokMegj, this.hibaMegj);
        //this.DATASERVICE.getData("../adat.json", this.adatokMegj, this.hibaMegj);
    }

    adatokMegj(lista){
        //console.log(lista)
        new AdatView(lista, $(".lista"));
    }

    hibaMegj(error){
        //console.log(error)
        new HibaView(error, $(".lista"));
    }
}

export default AdatController;