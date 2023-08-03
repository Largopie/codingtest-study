function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((val, idx) => (idx % 2 == 0) ? even+=val : odd+=val);
    
    return Math.max(even, odd);
}