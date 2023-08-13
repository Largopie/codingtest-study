function solution(num_list) {
    let odd = '', even = ''
    
    for(num of num_list){
        (num % 2 == 1) ? odd+=String(num) : even+=String(num);
    }
    
    return Number(odd) + Number(even)
}