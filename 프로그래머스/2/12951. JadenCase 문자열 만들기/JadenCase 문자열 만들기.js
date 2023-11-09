function solution(s) {
    const splitString = s.split(' ');
    
    const JadenCase = splitString.map((str) => {
        if(str === '') return;
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    })
    
    return JadenCase.join(' ');
}