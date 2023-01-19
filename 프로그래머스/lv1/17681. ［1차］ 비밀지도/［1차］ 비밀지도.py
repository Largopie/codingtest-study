def solution(n, arr1, arr2):
    answer=[]
    for i in range(n):
        newarr=''
        strarr1 = bin(arr1[i])[2:].zfill(n)
        strarr2 = bin(arr2[i])[2:].zfill(n)
        for j in range(n):
            newarr = newarr+'#' if int(strarr1[j]) or int(strarr2[j]) else newarr+' '
        answer.append(newarr)
    return answer