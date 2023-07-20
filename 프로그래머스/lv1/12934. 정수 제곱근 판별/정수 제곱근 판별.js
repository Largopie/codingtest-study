function solution(n) {
    const root = n**(1/2);
    return (root === parseInt(root)) ? (root+1)**2 : -1;
}