def solution(arr, k):
    choose = []
    for i in arr:
        if i not in choose:
            choose.append(i)
        if len(choose) == k:
            return choose
    return choose+[-1]*(k-len(choose))