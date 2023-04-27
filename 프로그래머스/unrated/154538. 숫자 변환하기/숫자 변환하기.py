def solution(x, y, n):
    answer = 0

    bfs = set()
    bfs.add(x)

    while bfs:
        if y in bfs:
            return answer
        bfs_y = set()
        for i in bfs:
            if i*2 <= y:
                bfs_y.add(i*2)
            if i*3 <= y:
                bfs_y.add(i*3)
            if i+n <= y:
                bfs_y.add(i+n)
            bfs = bfs_y
        answer+=1
    return -1