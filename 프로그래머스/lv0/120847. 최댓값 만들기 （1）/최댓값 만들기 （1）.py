numbers = [1,2,3,4,5]
def solution(numbers):
    numbers.sort()
    return numbers[-1]*numbers[-2]