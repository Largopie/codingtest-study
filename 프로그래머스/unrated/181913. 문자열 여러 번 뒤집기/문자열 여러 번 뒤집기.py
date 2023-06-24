def solution(my_string, queries):
    for i in queries:
        pre = my_string[:i[0]]
        rev = my_string[i[0]:i[1]+1]
        suf = my_string[i[1]+1:]
        my_string = pre + rev[::-1] + suf
    return my_string