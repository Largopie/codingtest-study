def solution(arr):
    x = 0
    while True:
        newArr = arr.copy()
        for i in range(len(newArr)):
            if newArr[i] >= 50 and newArr[i] % 2 == 0:
                newArr[i] = newArr[i] // 2
            elif newArr[i] < 50 and newArr[i] % 2 == 1:
                newArr[i] = newArr[i]*2 + 1

            
        if newArr == arr:
            return x
        else:
            arr = newArr.copy()
            x+=1