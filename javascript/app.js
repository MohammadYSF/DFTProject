// import { Complex } from "./Complex";
class Complex {
    #real = 0;
    #image = 0;
    get real() {
        return this.#real;
    }
    set real(v) {
        this.#real = v;
    }
    set image(v) {
        this.#image = v;
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
    wk(k, n) {

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
    let hasPlus = s.includes('+') == true;
    let realPart;
    let imagePart;
    if (hasPlus) {
        let splitSign = "+";
        realPart = Number.parseInt(s.split(splitSign)[0]);
        imagePart = Number.parseInt(s.split(splitSign)[1].split("i")[0]);
    }
    else {
        let splitSign = "-";
        realPart = Number.parseInt(s.split(splitSign)[0]);
        imagePart = (-1) * Number.parseInt(s.split(splitSign)[1].split("i")[0]);
    }
    let c = new Complex(realPart, imagePart);
    return c;
}
const cis = (x) => {
    let c = new Complex();
    //let teta = this.arg();
    let real = Math.cos(x);
    let image = Math.sin(x);
    c.real = real;
    c.image = image;
    return c;
}
const wk = (k, n) => {

    let answer = cis(2 * k * Math.PI / n);
    return answer;
}
let arrRaw = ["4+5i", "5-8i", "12+10i", "7-13i"];
let n = 4;
let arrA = [];
let arrB = [];
let ws = [];
for (let i = 0; i < n; i++) {
    let c = convertComplexStringToComplexNumber(arrRaw[i]);
    arrA.push(c);
}
for (let i = 0; i < n; i++) {
    let wi = wk(i, n);
    wi.real = wi.real.toFixed(20);
    wi.image = wi.image.toFixed(20);
    ws.push(wi);
}


for (let i = 0; i < n; i++) {
    let bi = new Complex(0, 0);
    for (let j = 0; j < n; j++) {
        let x = arrA[j];
        bi = bi.add(arrA[j].multiply(ws[i]));
    }
    arrB.push(bi);
}
for (let i = 0; i < n; i++) {
    arrB[i].print();
}

