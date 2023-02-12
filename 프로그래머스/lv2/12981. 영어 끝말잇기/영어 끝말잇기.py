def solution(n, words):
    p = []
    for idx in range(len(words)):
        if p and p[-1][-1] != words[idx][0]:
            return [idx%n+1, idx//n+1]
        if words[idx] in p:
            return [idx%n+1, idx//n+1]
        p.append(words[idx])
    return [0,0]