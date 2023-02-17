import math

def solution(arr):
    lcm = int(arr[0] * arr[1] / math.gcd(arr[0],arr[1]))
    for i in range(2,len(arr)):
        lcm = int(lcm * arr[i] / math.gcd(lcm, arr[i]))
    return lcm