import math


class Complex:

    def __init__(self, a, b):
        self.a = a
        self.b = b


def cis(x):

    a = math.cos(x)
    b = math.sin(x)
    c = Complex(a, b)
    return c


def multiple(c1, c2):
    real = (c1.a * c2.a - c1.b * c2.b)
    image = c1.ac2.b + c1.bc2.a
    c = Complex(real, image)
    return c


def add(c1, c2):
    real = c1.a + c2.a
    image = c1.b+c2.b
    c = Complex(real, image)
    return c


def Wn(n):
    answer = cis(2*n*math.pi/4)
    return answer


def powComplex(c, n):
    if n == 0:
        return Complex(1, 0)
    r = c
    for i in range(1, n-1):
        r = multiple(r, c)
    return r


n = int(input())
arrayA = []
for i in range(0, n):
    x = input()
    a = x.split("+")[0]
    b = x.split("+")[1][0]
    a = int(a)
    b = int(b)
    c = Complex(a, b)
    arrayA.append(c)
arrayB = []
for i in range(0, n):
    x = Complex(0, 0)
for j in range(0, n-1):
    x = add(x, multiple(arrayA[j], powComplex(Wn(i), j)))
arrayB.append(x)

# 33
for x in arrayB:
    print(x.a)
    print(x.b)
    print("**************")
