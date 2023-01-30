def solution(my_string):
    return sorted(list(map(int, [i for i in my_string if i.isdigit()])))