def solution(n, m, section):
    count = 0
    paint = 0
    for num in section:
        if paint < num:
            paint = num+m-1
            count+=1
    return count