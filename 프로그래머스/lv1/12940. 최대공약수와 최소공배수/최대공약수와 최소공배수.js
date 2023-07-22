function solution(n, m) {
    const num1 = Math.max(n, m);
    const num2 = Math.min(n, m);
    const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
    const gcd_result = gcd(num1, num2);
    
    return [gcd_result, parseInt(n*m/gcd_result)]
}