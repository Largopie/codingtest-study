def solution(n, k):
    convert = ''
    answer = 0
    while True:
        if n == 0:
            break
        n, a = divmod(n, k)
        convert = str(a)+convert

    for i in convert.split('0'):
        if i == '':
            continue
        count = 0
        num = int(i)
        if num >= 2:
            for j in range(1, int(num**(1/2) + 1)):
                if num % j == 0:
                    count+=1
            if count == 1:
                answer+=1
    return answer