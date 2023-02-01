def solution(num_list, n):
    answer = []
    for i in range(0,len(num_list), n):
        addAns = []
        for j in range(i, i+n):
            addAns.append(num_list[j])
        answer.append(addAns)
    return answer