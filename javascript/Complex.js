export class Complex {
    #real = 0;
    #image = 0;
    constructor(real, image) {
        this.#real = real;
        this.#image = image;
    }
    get size() {
        let result = Math.sqrt(Math.pow(this.#real, 2) + Math.pow(this.#image, 2));
        return result;
    }
    setComplex(real, image) {
        this.#real = real;
        this.#image = image;
    }
    setReal(real) {
        this.#real = real;
    }
    setImage(image) {
        this.#image = image
    }
    get conjugate() {
        return new Complex(this.#real, -this.#image);
    }
    get arg() {
        return Math.atan(this.#image / this.#real);
    }
    add(complex) {
        let realPart = this.#real + complex.real;
        let imagePart = this.#image + complex.image;
        return new Complex(realPart, imagePart);
    }
    substract(complex) {
        let realPart = this.#real - complex.real;
        let imagePart = this.#image - complex.image;
        return new Complex(realPart, imagePart);
    }
    multiply(complex) {
        let realPart = (this.#real * complex.real) - (this.#image * complex.image);
        let imagePart = (this.#real * complex.image) + (this.#image * complex.real);
        return new Complex(realPart, imagePart);
    }
    divide(complex) {
        let denominator = complex.size;
        let marriaged = complex.conjugate;
        let numerator = this.multiply(marriaged);
        let realPart = numerator.real / denominator;
        let imagePart = numerator.image / denominator;
        return new Complex(realPart, imagePart);
    }

}