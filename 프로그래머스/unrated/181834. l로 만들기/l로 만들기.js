function solution(myString) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    let answer = ''
    const lIndex = alphabet.indexOf('l')
    for(char of myString){
        (alphabet.indexOf(char) < lIndex) ? answer+='l' : answer+=char
    }
    
    return answer
}