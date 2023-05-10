from heapq import heappop, heappush

def solution(numbers):
    answer = [-1 for i in range(len(numbers))]
    h = []

    for i in range(len(numbers)):
        while h and h[0][0] < numbers[i]:
            _,idx = heappop(h)
            answer[idx] = numbers[i]
        
        heappush(h, [numbers[i],i])
    return answer
