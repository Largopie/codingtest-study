def solution(n):
    rev = ''
    while n>= 3:
        n, mod = divmod(n, 3)
        rev += str(mod)
    rev += str(n)
    return int(rev, 3)