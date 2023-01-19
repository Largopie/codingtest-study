import copy
def solution(spell, dic):
    for i in dic:
        a = spell.copy()
        for j in i:
            if j in a:
                a.remove(j)
        if a == []:
            return 1
    return 2
