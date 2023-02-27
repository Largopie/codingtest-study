def solution(arr1, arr2):
    answer=[]
    for a in range(len(arr1)):
        arr=[]
        for c in range(len(arr2[0])):
            arrSum=0
            for b in range(len(arr2)):
                arrSum+=arr1[a][b] * arr2[b][c]
            arr.append(arrSum)
        answer.append(arr)
    return answer