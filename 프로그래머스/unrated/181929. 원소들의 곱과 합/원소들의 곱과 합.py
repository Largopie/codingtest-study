def solution(num_list):
    mul = 1
    sumSquare = sum(num_list)**2
    for i in num_list: mul *= i

    return 1 if mul < sumSquare else 0