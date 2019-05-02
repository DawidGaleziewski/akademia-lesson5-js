let jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}


jsonOsoby.osoby.forEach(element => {
    console.log(element.oczy);
})


for(let i = 0; i < jsonOsoby.osoby.length; i ++){
    console.log(jsonOsoby.osoby[i]);
}