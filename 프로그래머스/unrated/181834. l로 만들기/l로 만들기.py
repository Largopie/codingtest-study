def solution(myString):
    answer = ''
    for i in myString:
        if ord("l") > ord(i):
            answer+="l"
        else:
            answer+=i
    return answer