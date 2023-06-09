def solution(myString, pat):
    string = ''.join(['A' if i == 'B' else 'B' for i in myString])
    return 1 if pat in string else 0