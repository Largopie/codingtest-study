def solution(a, b, c, d):
    arr = [a,b,c,d]
    dic = {}
    for i in arr:
        dic[i] = dic.get(i, 0)+1
    
    countMax = max(dic.values())
    diceList = list(dic.keys())

    if countMax == 4:
        return sum(dic.keys())*1111
    
    if countMax == 3:
        same = 0
        dif = 0
        for key, val in dic.items():
            if val == 3:
                same = key
            else: dif = key
        return (10 * same + dif)**2
    
    if countMax == 2:
        if len(diceList) == 2:
            return (diceList[0] + diceList[1]) * abs(diceList[0] - diceList[1])
        else:
            ans = 1
            for key, val in dic.items():
                if val == 1:
                    ans*=key
            return ans
    else: return min(diceList)
            
                