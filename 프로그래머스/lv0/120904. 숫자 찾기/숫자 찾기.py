def solution(num, k):
    strNum = str(num)
    for i in range(len(strNum)):
        if strNum[i] == str(k):
            return i+1
    return -1