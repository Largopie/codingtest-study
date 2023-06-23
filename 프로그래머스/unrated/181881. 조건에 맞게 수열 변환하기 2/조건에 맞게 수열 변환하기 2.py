def solution(arr):
    def setArr(num):
        newArr = arr.copy()
        if num == 0:
            return newArr
        for _ in range(num):
            for i in range(len(newArr)):
                if newArr[i] >= 50 and newArr[i] % 2 == 0:
                    newArr[i] = newArr[i] // 2
                elif newArr[i] < 50 and newArr[i] % 2 == 1:
                    newArr[i] = newArr[i]*2 + 1
        return newArr
    x = 0
    while True:
        if setArr(x) == setArr(x+1):
            return x
        x+=1