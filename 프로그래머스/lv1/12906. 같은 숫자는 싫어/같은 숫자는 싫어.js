function solution(arr)
{
    const new_arr = [];
    new_arr.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(new_arr.at(-1) !== arr[i]) new_arr.push(arr[i]);
    };
    
    return new_arr;
}