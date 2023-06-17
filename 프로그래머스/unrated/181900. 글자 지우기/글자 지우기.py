def solution(my_string, indices):
    dic = {}
    for i in range(len(my_string)):
        dic[i] = my_string[i]
    for i in indices:
        del dic[i]
    return ''.join(dic.values())