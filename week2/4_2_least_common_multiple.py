# Uses python2

import sys

def gcd(a, b):
    if a == 0:
        return b

    elif b == 0:
        return a

    remainder = a % b
    gcdNum = gcd(b, remainder)

    return gcdNum

def lcm(a, b):
    gcdNum = gcd(a, b)

    return a * b / gcdNum


if __name__ == '__main__':
    input = sys.stdin.read()
    a, b = map(int, input.rstrip().split())

    print(int(lcm(a, b)))
