function solution(price, money, count) {
    let all_price = [];
    for(let i=1; i <= count; i++){
        all_price.push(price*i);
    };
    const result = all_price.reduce((a,b) => a+b);
    return (result - money > 0) ? result - money: 0;
}