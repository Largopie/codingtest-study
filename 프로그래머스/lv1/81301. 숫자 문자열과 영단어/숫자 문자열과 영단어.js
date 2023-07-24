function solution(s) {
    const word_to_num = {
        'zero': '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9'
    };
    for(key in word_to_num) {
        s = s.replaceAll(key, word_to_num[key]);
    }
    return parseInt(s);
}