def solution(numbers, hand):
    answer = ''
    lh = '*'
    rh = '#'
    for i in range(len(numbers)):
        ld = 0
        rd = 0
        if numbers[i] in [2,5,8,0]:
            if numbers[i] == 0:
                if lh in ['*',8,]:
                    ld = 1
                elif lh in [5,7]:
                    ld = 2
                elif lh in [2,4]:
                    ld = 3
                elif lh == 1:
                    ld = 4
                if rh in ['#',8]:
                    rd = 1
                elif rh in [5,9]:
                    rd = 2
                elif rh in [2,6]:
                    rd = 3
                elif rh == 3:
                    rd = 4
                if ld > rd:
                    answer += 'R'
                    rh = numbers[i]
                elif ld < rd:
                    answer += 'L'
                    lh = numbers[i]
                elif ld == rd:
                    if hand == "right":
                        answer += 'R'
                        rh = numbers[i]
                    elif hand == "left":
                        answer += 'L'
                        lh = numbers[i]
            elif numbers[i] == 8:
                if lh in [0,5,7]:
                    ld = 1
                elif lh in ['*',2,4]:
                    ld = 2
                elif lh == 1:
                    ld = 3
                if rh in [0,5,9]:
                    rd = 1
                elif rh in ['#',2,6]:
                    rd = 2
                elif rh == 3:
                    rd = 3
                if ld > rd:
                    answer += 'R'
                    rh = numbers[i]
                elif ld < rd:
                    answer += 'L'
                    lh = numbers[i]
                elif ld == rd:
                    if hand == "right":
                        answer += 'R'
                        rh = numbers[i]
                    elif hand == "left":
                        answer += 'L'
                        lh = numbers[i]
            elif numbers[i] == 5:
                if lh in [2,4,8]:
                    ld = 1
                elif lh in [0,1,7]:
                    ld = 2
                elif lh == '*':
                    ld = 3
                if rh in [2,6,8]:
                    rd = 1
                elif rh in [3,9,0]:
                    rd = 2
                elif rh == '#':
                    rd = 3
                if ld > rd:
                    answer += 'R'
                    rh = numbers[i]
                elif ld < rd:
                    answer += 'L'
                    lh = numbers[i]
                elif ld == rd:
                    if hand == "right":
                        answer += 'R'
                        rh = numbers[i]
                    elif hand == "left":
                        answer += 'L'
                        lh = numbers[i]
            elif numbers[i] == 2:
                if lh in [1,5]:
                    ld = 1
                elif lh in [4,8]:
                    ld = 2
                elif lh in [0,7]:
                    ld = 3
                elif lh == '*':
                    ld = 4
                if rh in [3,5]:
                    rd = 1
                elif rh in [6,8]:
                    rd = 2
                elif rh in [0,9]:
                    rd = 3
                elif rh == '#':
                    rd = 4
                if ld > rd:
                    answer += 'R'
                    rh = numbers[i]
                elif ld < rd:
                    answer += 'L'
                    lh = numbers[i]
                elif ld == rd:
                    if hand == "right":
                        answer += 'R'
                        rh = numbers[i]
                    elif hand == "left":
                        answer += 'L'
                        lh = numbers[i]
        elif numbers[i] in [1,4,7]:
            answer += 'L'
            lh = numbers[i]
        elif numbers[i] in [3,6,9]:
            answer += 'R'
            rh = numbers[i]
    return answer