def solution(s):
    countZero = 0
    count = 0
    while s != "1":
        countZero+= s.count('0')
        count+=1
        s=s.replace('0','')
        s=bin(len(s))[2:]
    return [count, countZero]