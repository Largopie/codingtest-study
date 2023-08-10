function solution(keymap, targets) {
    const press_key = {}, answer = []
    
    for(keys of keymap){
        for(let i=0; i < keys.length; i++){
            if(press_key[keys[i]] === undefined){
                press_key[keys[i]] = i+1
            } else{
                if(press_key[keys[i]] > i+1) press_key[keys[i]] = i+1;
            }
        }
    }
    
    for(target of targets){
        let num = 0
        for(c of target){
            if(press_key[c] === undefined){
                num=-1
                break
            }
            num+=press_key[c]
        }
        answer.push(num)
    }
    
    return answer
}