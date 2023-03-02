def solution(s):
    dic = {}
    ans = []
    a = s[1:-1]
    a = a.replace(',','.')
    a = a.split('.')
    a = list(map(lambda x: x.lstrip('{').rstrip('}'), a))
    for i in a:
        dic[i] = dic.get(i,0)+1
    for key,val in sorted(dic.items(), key=lambda x:x[1], reverse=True):
        ans.append(int(key))
    return ans