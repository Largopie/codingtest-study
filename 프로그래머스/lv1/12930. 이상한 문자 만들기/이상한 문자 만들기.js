function solution(s) {
    const arr = [];
    for(val of s.split(' ')){
        let string = '';
        for(idx in val){
            (idx % 2 === 0) ? string+=val[idx].toUpperCase() : string+=val[idx].toLowerCase();
        };
        arr.push(string);
    };
    return arr.join(' ');
}