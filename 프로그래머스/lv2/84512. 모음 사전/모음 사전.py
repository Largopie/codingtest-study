import itertools
def solution(word):
    alphabet = ['A', 'E', 'I', 'O', 'U']
    answer = []
    for i in range(1, 6):
        for j in itertools.product(alphabet, repeat=i):
            answer.append(''.join(j))
    answer.sort()
    return answer.index(word)+1

    
    