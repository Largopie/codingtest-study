def solution(lines):
    length=[]
    for i in range(len(lines)):
        for j in range(i+1,len(lines)):
            if lines[i][1] > lines[j][0]:
                length.append((max(lines[i][0], lines[j][0]),min(lines[i][1], lines[j][1])))
    lsum=0
    for i in range(len(length)):
        lsum += length[i][1] - length[i][0]
        if i+1 == len(length):
            break
        if length[i][1] > length[i+1][0]:
            lsum-=(min(length[i][1],length[i+1][1]) - max(length[i][0], length[i+1][0]))
    return lsum