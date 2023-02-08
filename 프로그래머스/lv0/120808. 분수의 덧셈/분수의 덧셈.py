import math
def solution(numer1, denom1, numer2, denom2):
    numer1 *= denom2
    numer2 *= denom1
    numer = numer1 + numer2
    denom = denom1 * denom2
    y = math.gcd(numer,denom)
    return [numer // y, denom // y]