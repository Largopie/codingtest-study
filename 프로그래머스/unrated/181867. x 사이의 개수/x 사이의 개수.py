def solution(myString):
    arr = myString.split('x')
    newArr = []
    for i in arr:
        newArr.append(len(i))
    return newArr