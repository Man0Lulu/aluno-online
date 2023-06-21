class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        mediaCA() {
            if (this.mediaFinal() >= 9 ) {
                return "SS";
            } 
            if (this.mediaFinal() >= 7 && this.mediaFinal() < 9 ) {
                return "MS";
            }
            if (this.mediaFinal() >= 5 && this.mediaFinal() < 7 ) {
                return "MM";
            }
            if (this.mediaFinal() >= 3 && this.mediaFinal() < 5 ) {
                return "MI";
            }
            if (this.mediaFinal() > 0 && this.mediaFinal() < 3 ) {
                return "II";
            } 
            else {
                return "SR";
            }
        }
    }
}

module.exports = Nota;