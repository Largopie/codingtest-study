function solution(arr1, arr2) {
    const result_arr = [];
    for(let i=0; i<arr1.length; i++){
        const repeat_arr = [];
        for(let j=0; j<arr1[0].length; j++){
            repeat_arr.push(arr1[i][j]+arr2[i][j]);
        };
        result_arr.push(repeat_arr);
    };
    
    return result_arr;
}