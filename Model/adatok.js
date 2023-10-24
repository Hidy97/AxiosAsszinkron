export const adatleiras = {
    nev: {
        megj: "Név",
        type: "text",
        placeholder: "Neve",
        value: "",
        regex: "[A-Z][a-z]{3}",
        valid: "Nagybetűvel kezdődik, legalább 3 betű legyen!",
        required: true,
    },
    szul: {
        megj: "Születési idő",
        type: "date",
        placeholder: "2000-01-01",
        pattern:{
            min: "1000-01-01",
            max: "2023-12-31",
        },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
    }
}