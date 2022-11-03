export class Polynomial {
    #coEfficients = [];
    constructor(coEffiecients) {
        this.#coEfficients = [...coEffiecients];
    }
    get deg() {
        for (let i = 0; i < this.#coEfficients.length; i++) {
            let flag = true;
            for (let j = i + 1; j < this.#coEfficients.length; j++) {
                if (this.#coEfficients[j] !== 0) {
                    flag = false;
                }
            }
            if (flag) {
                return i;
            }
        }
    }
    getValueAt(x) {
        let result = 0;
        for (let i = 0; i < this.#coEfficients.length; i++) {
            result += this.#coEfficients[i] * Math.pow(x, i);
        }
        return result;
    }
    getValueAtUsingHorner(x) {
        let deg = this.deg;
        let result = this.#coEfficients[0];
        for (let i = 1; i <= deg; i++) {
            result = result * x + this.#coEfficients[i]
        }
        return result;
    }
    get coEfficients() {
        return [...this.#coEfficients];
    }
    add(polynomial) {
        let coEffiecients = [];
        for (let i = 0; i < Math.max(polynomial.deg, this.deg); i++) {
            coEffiecients.add(this.#coEfficients[i] + polynomial.coEfficients[i]);
        }
        return new Polynomial(coEffiecients);
    }
    substract(polynomial) {
        let coEffiecients = [];
        for (let i = 0; i < Math.max(polynomial.deg, this.deg); i++) {
            coEffiecients.add(this.#coEfficients[i] - polynomial.coEfficients[i]);
        }
        return new Polynomial(coEffiecients);
    }

}