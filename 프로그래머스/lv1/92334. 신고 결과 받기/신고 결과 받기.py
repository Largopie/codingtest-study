def solution(id_list, report, k):
    answer = []
    reportdic = {}
    reportcount = {}
    for i in id_list:
        reportcount[i] = 0

    for i in range(len(report)):
        report[i] = report[i].split()
        if report[i][0] not in reportdic.keys():
            reportdic[report[i][0]] = [report[i][1]]
        else:
            reportdic[report[i][0]].append(report[i][1])
        reportcount[report[i][0]] = 0


    for i in reportdic.keys():
        reportdic[i] = list(set(reportdic[i]))
        for j in reportcount.keys():
            if(j in reportdic[i]):
                reportcount[j] += 1

    for i in id_list:
        count = 0
        if i in reportdic.keys():
            for j in reportdic[i]:
                if reportcount[j] >= k:
                    count +=1
        answer.append(count)
    return answer