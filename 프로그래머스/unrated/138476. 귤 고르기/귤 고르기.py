def solution(k, tangerine):
    answer = 0
    tanCount = {}
    for i in set(tangerine):
        tanCount[i] = 0
    for i in tangerine:
        tanCount[i]+=1
    tanCount = dict(sorted(tanCount.items(), key=lambda x:x[1], reverse=True))
    count = 0
    for i in tanCount.values():
        count+=i
        answer+=1
        if count >= k:
            return answer