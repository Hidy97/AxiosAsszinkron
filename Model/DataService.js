class DataService {
    constructor() {

    }

    getData(apiVegpont, callback, hibaCallback) {
        axios.get(apiVegpont)
            .then(function (response) {
                //console.log(callback)
                // handle success
                /**
                console.log("Válasz objektum", response);
                console.log("adatok", response.data);
                console.log("Adatok nevek lista", response.data.nevek);
                console.log("status", response.status);
                console.log("Státusz szöveg", response.statusText);
                console.log("Válasz fejléc", response.headers);
                console.log("Válasz konfig", response.config);
                 */
                callback(response.data.nevek)
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                hibaCallback(error)
            })
            .finally(function () {
                // always executed
            });
    }

}

export default DataService;