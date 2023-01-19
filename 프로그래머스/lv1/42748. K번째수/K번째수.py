def solution(array, commands):
    answer = []
    for i in commands:
        newa = list(array[i[0]-1:i[1]])
        newa.sort()
        answer.append(newa[i[2]-1])
    return answer