def solution(num, total):
    avg = total // num
    answer = [avg]
    for i in range(1,  num // 2 + 1):
        answer.append(avg-i)
        answer.append(avg+i)
    answer.sort()
    if num % 2 == 0:
        return answer[1:]
    else:
        return answer