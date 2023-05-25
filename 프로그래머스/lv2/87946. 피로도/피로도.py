from itertools import permutations

def solution(k, dungeons):
    
    for i in range(len(dungeons), 0, -1):
        case = permutations(sorted(dungeons, reverse=True), i)
        for j in case:
            tired = k
            count = 0
            for dungeon in j:
                if dungeon[0] > tired:
                    break
                else:
                    tired -= dungeon[1]
                    count+=1
            if count == i:
                return i