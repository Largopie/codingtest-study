def solution(n, m):
    minNum = min(n, m)
    maxNum = max(n, m)

    def gcd(a, b):
        while(a != 0):
            n = b % a
            b = a
            a = n
        return b

    gcd = gcd(minNum,maxNum)
    lcm = (minNum*maxNum) // gcd
    return [gcd,lcm]