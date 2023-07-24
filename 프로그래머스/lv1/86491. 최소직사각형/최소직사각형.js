function solution(sizes) {
    let max_width = 0, max_height = 0;
    for(let i=0; i < sizes.length; i++){
        let max = Math.max(...sizes[i]);
        let min = Math.min(...sizes[i]);
        if(max_width <= max) max_width = max;
        if(max_height <= min) max_height = min;
    };
    return max_width * max_height;
}