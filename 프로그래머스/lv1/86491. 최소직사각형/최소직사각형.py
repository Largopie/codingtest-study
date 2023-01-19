def solution(sizes):
    w = 0; h = 0 
    for i in sizes:
            if w < max(i):
                w = max(i)
            if h < min(i):
                h = min(i)
    return w*h