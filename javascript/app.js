// import { Complex } from "./Complex";
class Complex {
    #real = 0;
    #image = 0;
    get real() {
        return this.#real;
    }
    get image() {
        return this.#image;
    }
    constructor(real, image) {
        this.#real = real;
        this.#image = image;
    }
    get size() {
        let result = Math.sqrt(Math.pow(this.#real, 2) + Math.pow(this.#image, 2));
        return result;
    }
    static wk(k, n) {
        let answer = this.cis(2 * k * Math.PI / n);
        return answer;
    }
    print() {
        let answer = "";
        if (this.#image == 0) {
            answer = this.#real;
        }
        else if (this.#image < 0) {
            answer = this.#real + "-" + Math.abs(this.#image) + "i";
        }
        else {
            answer = this.#real + "+" + Math.abs(this.#image) + "i";
        }
        console.log(answer);
    }
    pow(n) {
        if (n == 0) {
            return new Complex(1, 0);
        }
        let answer = this;
        for (let i = 1; i < n; i++) {
            answer = answer.multiply(this);
        }
        return answer;
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
    cis() {
        let c = new Complex();
        let teta = this.arg();
        let real = Math.cos(teta);
        let image = Math.sin(teta);
        c.#real = real;
        c.#image = image;
        return c;
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
    multiplyScaller(scaller) {
        let realPart = this.#real * scaller;
        let imagePart = this.#image * scaller;
        let c = new Complex(realPart, imagePart);
        return c;
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
const convertComplexStringToComplexNumber = (s) => {
    let realPart = s.split("+")[0];
    let imagePart = s.split("+")[1].split("i")[0];
    console.log("real part : ", realPart);
    console.log("image part : ", imagePart);
    let c = new Complex(realPart, imagePart);
    return c;
}
let arrRaw = [];
let n;
let arrA = [];
let arrB = [];
let ws = [];
for (let i = 0; i < n; i++) {
    let c = convertComplexStringToComplexNumber(arrRaw[i]);
    arrA.push(c);
}
for (let i = 0; i < n; i++) {
    let wi = Complex.wk(i, n);
    ws.push(wi);
}


for (let i = 0; i < n; i++) {
    let bi = new Complex(0, 0);
    for (let j = 0; j < n; j++) {
        bi = bi.add(arrA[j].multiply(w[i]));
    }
    arrB.push(bi);
}
for (let i = 0; i< n;i++){
    arrB[i].print();
}

let c1 = new Complex(1, 1)
let c2 = new Complex(3, 6)
let c3 = c2.pow(0);