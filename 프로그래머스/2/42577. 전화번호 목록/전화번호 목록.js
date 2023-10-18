function solution(phone_book) {
    phone_book.sort()
    for(let i=1; i < phone_book.length; i++) {
        if (phone_book[i-1] === phone_book[i].slice(0, phone_book[i-1].length)) return false
    }
    return true
}