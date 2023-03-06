def solution(wallpaper):
    minX = len(wallpaper[0]) - 1
    minY = len(wallpaper) - 1
    maxX, maxY = 0,0
    for i in range(len(wallpaper)):
        for j in range(len(wallpaper[0])):
            if wallpaper[i][j] == '#':
                if minX >= j: minX = j      
                if minY >= i: minY = i
                if maxX <= j: maxX = j+1
                if maxY <= i: maxY = i+1
    return [minY, minX, maxY, maxX]