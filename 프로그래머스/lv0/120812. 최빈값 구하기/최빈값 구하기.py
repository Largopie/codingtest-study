def solution(array):
    count = {}
    if len(array) == 1:
        return array[0]
    for i in set(array):
        count[i] = array.count(i)
    count = sorted(count.items(), key=lambda x: x[1], reverse=True)
    return -1 if count[0][1] == count[1][1] else count[0][0]