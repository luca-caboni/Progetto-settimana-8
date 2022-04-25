"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('Progetto settimana 8 "TypeScript"');
    class User {
        constructor(_carica, _numeroChiamate) {
            this.carica = _carica;
            this.numeroChiamate = _numeroChiamate;
        }
        ricarica(unaRicarica) {
            this.carica += unaRicarica;
        }
        chiamata(minutiDurata = Math.floor(Math.random() * 10)) {
            const tariffa = 0.2;
            this.carica = this.carica - tariffa - (tariffa * minutiDurata);
            this.numeroChiamate++;
        }
        numero404() {
            return Number(this.carica.toFixed(1));
        }
        getNumeroChiamate() {
            return this.numeroChiamate;
        }
        azzeraChiamate() {
            this.numeroChiamate = 0;
        }
    }
    ;
    let FirstUser = new User(10, 0);
    let SecondUser = new User(10, 0);
    let ThirdUser = new User(10, 0);
});
