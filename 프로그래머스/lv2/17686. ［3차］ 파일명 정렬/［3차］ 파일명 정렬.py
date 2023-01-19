def solution(files):
    fileDict = {}
    answer = []
    for f in files:
        saveIndex = []
        for i in range(len(f)):
            if f[i].isdigit():
                saveIndex.append(i)
                if i+1 == len(f) or f[i+1].isdigit() == False:
                    fileDict[f] = [f[:saveIndex[0]].lower(),int(f[saveIndex[0]:saveIndex[-1]+1])]
                    break
    
    return [i[0] for i in sorted(fileDict.items(), key=lambda x: (x[1][0], x[1][1]))]