def solution(a, b):
    m=-1
    for i in range(b, 0,-1):
        if (a % i == 0 and b % i == 0):
            m=i
            break
        
    if m != -1:
        b = int(b / m)
    
    div = 2
    soinsu=[]
    
    while div <= b:
        if b % div == 0:
            if div != 2 and div != 5:
                return 2
            b /= div
        else:
            div+=1
    return 1
            
            
