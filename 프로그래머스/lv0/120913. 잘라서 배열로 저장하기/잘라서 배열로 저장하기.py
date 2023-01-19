def solution(my_str, n):
    answer = []
    for i in range(len(my_str)//n):
        answer.append(my_str[:n])
        my_str = my_str[n:]
    if len(my_str) > 0:
        answer.append(my_str)
    return answer