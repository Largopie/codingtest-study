def solution(dirs):
    x,y = 0, 0
    movement = []
    for i in dirs:
        start = [x,y]
        if i == 'U':
            if y < 5:
                y+=1
        elif i == 'D':
            if y > -5:
                y-=1
        elif i == 'R':
            if x < 5:
                x+=1
        elif i == 'L':
            if x > -5:
                x-=1
        end = [x,y]
        if start == end:
            continue
        if ((start+end) in movement) or ((end+start) in movement):
            continue
        movement.append(start+end)
    return len(movement)