class HibaView{

    constructor(error, szuloElem){
        this.szuloElem=szuloElem
        this.szuloElem.html(error)
    }
}

export default HibaView;