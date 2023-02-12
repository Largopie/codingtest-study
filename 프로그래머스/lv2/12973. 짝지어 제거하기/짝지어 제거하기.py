def solution(s):
    ans = []
    for i in s:
        ans.append(i)
        if len(ans) >= 2:
            if ans[-1] == ans[-2]:
                del ans[-2:]
    return 1 if len(ans) == 0 else 0