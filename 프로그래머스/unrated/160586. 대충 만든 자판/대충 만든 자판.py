def solution(keymap, targets):
    dic = {}
    for key in keymap:
        for idx, val in enumerate(key,1):
            if val in dic.keys() and dic[val] < idx:
                continue
            dic[val] = idx
    ans = []
    
    for target in targets:
        count=0
        for c in target:
            if c in dic.keys():
                count+=dic[c]
            else:
                ans.append(-1)
                count = -1
                break
        if count != -1:
            ans.append(count)
    return ans