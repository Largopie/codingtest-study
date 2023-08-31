function solution(a, b) {
    const num1 = Number(String(a) + String(b))
    const num2 = Number(String(b) + String(a))
    
    return (num1 >= num2) ? num1 : num2
}