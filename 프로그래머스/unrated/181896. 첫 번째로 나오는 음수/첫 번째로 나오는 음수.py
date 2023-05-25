def solution(num_list):
    for idx, val in enumerate(num_list):
        if val < 0: return idx
    return -1