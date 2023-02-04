def solution(s, skip, index):
    alphabet = []
    answer=''
    for i in range(97,123):
        if chr(i) not in skip:
            alphabet.append(chr(i))
    for c in s:
        idx = alphabet.index(c)+index
        if idx >= len(alphabet):
            idx %= len(alphabet)
        answer+=alphabet[idx]
    return answer