def solution(box, n):
    boxsize=1
    for i in range(len(box)):
        boxsize *= n * (box[i] // n)
    return boxsize // (n**3)