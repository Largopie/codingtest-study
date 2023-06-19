def solution(my_string, s, e):
    a = my_string[:s]
    b = my_string[s:e+1]
    c = my_string[e+1:]
    return a+b[::-1]+c