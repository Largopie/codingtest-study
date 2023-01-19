def solution(babbling):
    answer = 0
    for i in babbling:
        for j in ["aya", "ye", "woo", "ma"]:
            if j in i:
                if j*2 in i:
                    break
                i=i.replace(j," ")
        if i.strip() == "":
            answer+=1
    return answer