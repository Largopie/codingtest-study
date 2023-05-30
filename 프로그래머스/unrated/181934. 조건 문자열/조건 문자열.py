def solution(ineq, eq, n, m):
    if eq == "!":
        eq = ''
    return 1 if eval(str(n) + ineq+ eq + str(m)) else 0