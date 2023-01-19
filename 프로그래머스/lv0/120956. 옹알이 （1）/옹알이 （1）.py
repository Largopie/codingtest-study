babbling = ["aya", "yee", "u", "maa"]
def solution(babbling):
    answer = 0
    for i in babbling:
        mystr = i
        for j in ["aya", "ye", "woo", "ma"]:
            if j * 2 not in i:
                mystr = mystr.replace(j, 'z')
        mystr = mystr.strip('z')
        if mystr == '':
            answer += 1
    return answer