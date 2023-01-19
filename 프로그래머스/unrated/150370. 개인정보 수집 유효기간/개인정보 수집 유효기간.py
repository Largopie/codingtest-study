def solution(today, terms, privacies):
    answer = []
    termDict = {}
    Tyear, Tmonth, Tday = map(int,today.split('.'))
    
    
    for i in terms:
        a, b = i.split(' ')
        termDict[a] = int(b)*28
    for i in range(len(privacies)):
        date, kind = privacies[i].split(' ')
        year, month, day = map(int, date.split('.'))

        daySum = (Tyear-year)*12*28 + (Tmonth-month)*28 + Tday-day
        if daySum >= termDict[kind]:
            answer.append(i+1)
    return answer