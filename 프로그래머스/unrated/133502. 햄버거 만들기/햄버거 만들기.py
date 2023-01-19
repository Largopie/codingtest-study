def solution(ingredient):
    count = 0
    ig=[]
    for i in ingredient:
        ig.append(i)
        if ig[-4:] == [1,2,3,1]:
            count+=1
            del ig[-4:]
    return count