def solution(survey, choices):
    answer = ''
    rank = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    for i in range(len(survey)):
        if choices[i]-1 > 3:
            rank[survey[i][1]] += (choices[i]-4)
        elif choices[i]-1 < 3:
            if choices[i] == 1:
                rank[survey[i][0]] += 3
            elif choices[i] == 2:
                rank[survey[i][0]] += 2
            elif choices[i] == 3:
                rank[survey[i][0]] += 1
    if rank['R'] >= rank['T']:
        answer+='R'
    else:
        answer+='T'
    if rank['C'] >= rank['F']:
        answer+='C'
    else:
        answer+='F'
    if rank['J'] >= rank['M']:
        answer+='J'
    else:
        answer+='M'
    if rank['A'] >= rank['N']:
        answer+='A'
    else:
        answer+='N'
    return answer