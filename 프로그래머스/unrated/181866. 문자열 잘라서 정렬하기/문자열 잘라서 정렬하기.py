def solution(myString):
    myString = myString.replace('x', ' ')
    return list(sorted(myString.split()))