import math


class Complex:

    def __init__(self, a, b):
        self.a = a
        self.b = b

    def get_real(self):
        return self.a

    def get_image(self):
        return self.b

    def size(self):
        result = math.sqrt(self.a**2 + self.b ** 2)
        return result

    def pow(self, n):
        if n == 0:
            return Complex(1, 0)
        answer = self
        for i in range(1, n):
            answer = answer.multiply(self)
        return answer

    def setComplex(self, a, b):
        self.a = a
        self.b = b

    def setReal(self, a):
        self.a = a

    def setImage(self, b):
        self.b = b

    def add(self, complex):
        a = self.a + complex.a
        b = self.b + complex.b
        return Complex(a, b)

    def substract(self, complex):
        a = self.a - complex.a
        b = self.b - complex.b
        return Complex(a, b)

    def multiply(self, complex):
        a = (self.a * complex.a) - (self.b * complex.b)
        b = (self.a * complex.b) + (self.b * complex.a)
        return Complex(a, b)

    def toString(self):
        answer = ""
        if self.b == 0:
            answer = self.a
        elif self.b < 0:
            answer = "{real:.10f} - {image:.10f}i".format(
                real=self.a, image=abs(self.b))
        else:
            answer = "{real:.10f} + {image:.10f}i".format(
                real=self.a, image=abs(self.b))
        return answer


def cis(x):
    a = math.cos(x)
    b = math.sin(x)
    c = Complex(a, b)
    return c


def wk(k, n):
    answer = cis(2*k*math.pi / n)
    return answer


def convertComplexStringToComplexNumber(s):
    hasPlus = '+' in s
    if hasPlus:
        splitSign = "+"
        a = int(s.split(splitSign)[0])
        b = int(s.split(splitSign)[1].split("i")[0])
    else:
        splitSign = "-"
        a = int(s.split(splitSign)[0])
        b = (-1)*int(s.split(splitSign)[1].split("i")[0])
    c = Complex(a, b)
    return c


print("============WELCOME TO THE DFT PROJECT============")
print("enter n :")
n = int(input())
arrA = []
arrB = []
ws = []
for i in range(0, n):
    print("enter a{x} : (x+yi)".format(x=i))
    rawInput = input()
    c = convertComplexStringToComplexNumber(rawInput)
    arrA.append(c)

    wi = wk(i, n)
    ws.append(wi)

for i in range(0, n):
    bi = Complex(0, 0)
    for j in range(0, n):
        x = arrA[j]
        bi = bi.add(x.multiply(ws[i]))
    arrB.append(bi)

for i in range(0, n):
    print("b{index}    :   {s}".format(index=i, s=arrB[i].toString()))
# def multiple(c1, c2):
#     real = (c1.a * c2.a - c1.b * c2.b)
#     image = c1.ac2.b + c1.bc2.a
#     c = Complex(real, image)
#     return c


# def add(c1, c2):
#     real = c1.a + c2.a
#     image = c1.b+c2.b
#     c = Complex(real, image)
#     return c


# def Wn(n):
#     answer = cis(2*n*math.pi/4)
#     return answer


# def powComplex(c, n):
#     if n == 0:
#         return Complex(1, 0)
#     r = c
#     for i in range(1, n-1):
#         r = multiple(r, c)
#     return r


# n = int(input())
# arrayA = []
# for i in range(0, n):
#     x = input()
#     a = x.split("+")[0]
#     b = x.split("+")[1][0]
#     a = int(a)
#     b = int(b)
#     c = Complex(a, b)
#     arrayA.append(c)
# arrayB = []
# for i in range(0, n):
#     x = Complex(0, 0)
# for j in range(0, n-1):
#     x = add(x, multiple(arrayA[j], powComplex(Wn(i), j)))
# arrayB.append(x)

# # 33
# for x in arrayB:
#     print(x.a)
#     print(x.b)
#     print("**************")
