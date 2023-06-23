def solution(my_string):
    dic = {}
    for i in range(65, 123):
        if chr(i).isalpha():
            dic[chr(i)] = 0
    
    for c in my_string:
        dic[c]+=1
    return list(dic.values())
            