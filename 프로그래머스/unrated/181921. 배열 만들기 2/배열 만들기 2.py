import itertools
def solution(l, r):
    answer = set()
    arr = ["0", "5"]
    for i in range(len(str(l)), len(str(r))+1):
        for j in itertools.product(arr, repeat=i):
            if int(''.join(j)) in range(l,r+1):
                answer.add(int(''.join(j)))
    if len(answer) == 0:
        return [-1]
    answer = list(answer)
    answer.sort()
    return answer