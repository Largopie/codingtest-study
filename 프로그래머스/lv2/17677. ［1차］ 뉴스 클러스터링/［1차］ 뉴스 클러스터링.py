def solution(str1, str2):
    str1Arr = []
    str2Arr = []

    for i in range(0,len(str1) - 1):
        word = str1[i:i+2].upper()
        if word.isalpha():
            str1Arr.append(word)
            
    for i in range(0,len(str2) - 1):
        word = str2[i:i+2].upper()
        if word.isalpha():
            str2Arr.append(word)
    
    copyStr1Arr = str1Arr.copy()
    uniArr = str1Arr.copy()

    for i in str2Arr:
        if i not in copyStr1Arr:
            uniArr.append(i)
        else:
            copyStr1Arr.remove(i)
    interArr = []
    for i in str2Arr:
        if i in str1Arr:
            str1Arr.remove(i)
            interArr.append(i)

    if len(interArr) + len(uniArr) == 0:
        return 65536
    
    return int((len(interArr) / len(uniArr)) * 65536)