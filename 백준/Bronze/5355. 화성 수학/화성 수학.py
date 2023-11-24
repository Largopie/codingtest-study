answer = []
count = int(input())

for _ in range(count):
    calculateArr = input().split(' ')
    firstNumber = float(calculateArr[0])
    for i in range(1, len(calculateArr)):
        if(calculateArr[i] == '@'):
            firstNumber *= 3
        elif(calculateArr[i] == '%'):
            firstNumber+=5
        elif(calculateArr[i] == '#'):
            firstNumber-=7
    answer.append('{:.2f}'.format(firstNumber))

for i in range(len(answer)):
    print(answer[i])
