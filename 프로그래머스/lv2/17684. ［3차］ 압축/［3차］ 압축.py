def solution(msg):
    answer=[]
    LZW = []
    for i in range(65,91):
        LZW.append(chr(i))

    i=0
    w=msg[i]
    while True:
        if w in LZW:
            if i+1 == len(msg):
                answer.append(LZW.index(w)+1)
                break
            i+=1
            w+=msg[i]
            continue
        else:
            answer.append(LZW.index(w[:-1])+1)
            if len(msg) > i:
                LZW.append(w)
            w=w[-1]
        
    return answer