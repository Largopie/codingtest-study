// 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다
function solution(topping) {
    const length = topping.length;
    const toppings = {}
    const me = new Set();
    let answer = 0;
    
    topping.forEach((t) => {
        if(toppings[t]) toppings[t] +=1
        else toppings[t] = 1
    })
    
    let brother = Object.keys(toppings).length;
    
    topping.forEach((t) => {
        me.add(t);
        toppings[t] -= 1
        if(toppings[t] === 0) {
            delete toppings[t];
            brother -= 1
        }
        if(me.size === brother) answer++;
    })
    
    return answer;
}