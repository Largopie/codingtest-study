function solution(n)
{
    let str = String(n).split('');
    return str.map(Number).reduce((a,b) => a+b);
}