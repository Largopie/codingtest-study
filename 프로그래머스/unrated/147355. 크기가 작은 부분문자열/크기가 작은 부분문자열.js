function solution(t, p) {
    let count = 0;
    const arr = [];
    
    for(let i=0; i < t.length - p.length + 1; i++){
        arr.push(t.split('').slice(i, i+p.length));
    };
    
    for(val of arr){
        if(parseInt(val.join('')) <= parseInt(p)) count+=1;
    };
    
    return count;
}