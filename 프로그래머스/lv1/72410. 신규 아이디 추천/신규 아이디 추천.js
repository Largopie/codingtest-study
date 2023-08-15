// 아이디 길이 3자 이상 15자 이하
// 알파벳 소문자, 숫자, -,_, .만 사용가능
//마침표는 처음과 끝에 사용 불가, 연속으로 사용 불가

function solution(new_id) {
    const level1 = (id) => {
        return id.toLowerCase()
    }
    
    const level2 = (id) => {
        let result = ''
        for(val of id){
            if(/([a-z]|[0-9]|[-_.])/.test(val)) result+=val;
        }
        return result
    }
    
    const level3 = (id) => {
        while(id.includes('..')) id = id.replaceAll('..', '.');
        return id
    }
    
    const level4 = (id) => {
        if(id.at(-1) == '.') id = id.substring(0, id.length - 1);
        if(id.at(0) == '.') id = id.substring(1, id.length);
        return id
    }    
    
    const level5 = (id) => {
        return (id === "") ? "a" : id;
    }
    
    const level6 = (id) => {
        if (id.length >= 15) id = id.substring(0, 15);
        return level4(id)
    }
    
    const level7 = (id) => {
        if(id.length <= 2){
            return id + id.at(-1).repeat(3 - id.length)
        }
        return id
    }
    new_id = level1(new_id)
    new_id = level2(new_id)
    new_id = level3(new_id)
    new_id = level4(new_id)
    new_id = level5(new_id)
    new_id = level6(new_id)
    new_id = level7(new_id)
    
    return new_id
}