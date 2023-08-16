function solution(wallpaper) {
    const x = [], y = []
    for(let i=0; i < wallpaper.length; i++){
        for(let j=0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#') {
                x.push(j);
                y.push(i)
            }
        }
    }
    return [Math.min(...y), Math.min(...x), Math.max(...y) + 1, Math.max(...x) + 1]
}