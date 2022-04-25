document.addEventListener('DOMContentLoaded', () => {

    console.log('Progetto settimana 8 "TypeScript"');

    interface Smartphone {

        carica: number;
        numeroChiamate: number;

        ricarica(carica: number, unaRicarica: number): void;
        chiamata(carica: number, minutiRicarica: number): void;
        numero404(): number;
        getNumeroChiamate(): number;
        azzeraChiamate(): void;
    }

    class User implements Smartphone {

        public carica: number;
        public numeroChiamate: number;

        constructor(_carica: number, _numeroChiamate: number) {
            this.carica = _carica;
            this.numeroChiamate = _numeroChiamate;
        }

        public ricarica(unaRicarica: number): void {
            this.carica += unaRicarica;
        }

        public chiamata(minutiDurata: number = Math.floor(Math.random() * 10)): void {
            const tariffa = 0.2;
            this.carica = this.carica - tariffa - (tariffa * minutiDurata);
            this.numeroChiamate++;
        }

        public numero404(): number {
            return Number(this.carica.toFixed(1));
        }

        public getNumeroChiamate(): number {
            return this.numeroChiamate;
        }

        public azzeraChiamate(): void {
            this.numeroChiamate = 0;
        }
    };

    let FirstUser = new User(10, 0);

    let SecondUser = new User(10, 0);

    let ThirdUser = new User(10, 0);
});