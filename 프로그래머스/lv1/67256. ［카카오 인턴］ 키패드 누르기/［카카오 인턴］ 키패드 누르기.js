function solution(numbers, hand) {
    let answer = '';
    const keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']
    ]
    
    const find_pointer = (num) => {
        for(let i=0; i < keypad.length; i++){
            for(let j=0; j < keypad[0].length; j++){
                if(keypad[i][j] === num) return [i, j];
            }
        }
    }
    
    let left_pointer = [3,0];
    let right_pointer = [3,2];
    
    for(number of numbers){
        const push = find_pointer(number);
        
        if(push[1] === 0){
            left_pointer = push
            answer+="L"
        }else if(push[1] === 2){
            right_pointer = push
            answer+="R"
        }else if(push[1] === 1){
            const left_dis = Math.abs(push[0] - left_pointer[0]) + Math.abs(push[1] - left_pointer[1])
            const right_dis = Math.abs(push[0] - right_pointer[0]) + Math.abs(push[1] - right_pointer[1])
            
            if(left_dis === right_dis){
                (hand === "right") ? answer+="R" : answer+="L";
            }else{
                (left_dis < right_dis) ? answer+="L" : answer+="R";
            }
            (answer.at(-1) == "R") ? right_pointer = push : left_pointer = push;
        }
    }
    return answer
    
}