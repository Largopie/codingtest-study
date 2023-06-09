def solution(num_list):
    evenSum = sum([num_list[i] for i in range(1, len(num_list), 2)])
    oddSum = sum([num_list[i] for i in range(0, len(num_list), 2)])    
    return max(oddSum, evenSum)