def solution(elements):
    answer = []
    for length in range(1, len(elements) + 1):
        for i in range(len(elements)):
            end = i+length
            if end <= len(elements):
                answer.append(sum(elements[i:end]))
            else:
                answer.append(sum(elements[i:]+elements[:end-len(elements)]))
    return len(set(answer))