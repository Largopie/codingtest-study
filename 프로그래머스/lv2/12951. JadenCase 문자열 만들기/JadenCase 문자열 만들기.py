def solution(s):
    answer = ''
    s = ' '+ s
    space = 0
    for c in s:
        if c.isalpha():
            if space == 1:
                answer+=c.upper()
                space=0
            else:
                answer+=c.lower()
        else:
            if c == ' ':
                space=1
            else: space = 0
            answer+=c
    return answer.lstrip(' ')
    