def solution(my_string, m, c):
    answer = ''
    string = ''
    
    for i in range(len(my_string)):
        string+=my_string[i]
        if (i+1) % m == 0:
            answer+=string[c-1]
            string = ''
    return answer