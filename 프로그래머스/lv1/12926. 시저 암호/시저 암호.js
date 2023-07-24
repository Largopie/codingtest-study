function solution(s, n) {
    const isUpperCase = (char) => {
        return char === char.toUpperCase();
    };
    const changeCode = (code) => {
        const l_alphabet = [];
        const s_alphabet = [];
        for(let i=97; i <= 122; i++) s_alphabet.push(String.fromCharCode(i));
        for(let i=65; i<=90; i++ ) l_alphabet.push(String.fromCharCode(i));
        
        if(!isNaN(code)) return code;
        if(isUpperCase(code)){
            return l_alphabet[(l_alphabet.indexOf(code) + n) % l_alphabet.length]
        } else{
            return s_alphabet[(s_alphabet.indexOf(code) + n) % s_alphabet.length] 
        }
    };
    let answer = '';
    for(c of s) {
        answer+=changeCode(c);
    }
    return answer;
}