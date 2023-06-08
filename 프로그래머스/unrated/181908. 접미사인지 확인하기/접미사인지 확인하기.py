def solution(my_string, is_suffix):
    suffix = [my_string[i:] for i in range(0,len(my_string)+1)]
    return 1 if is_suffix in suffix else 0