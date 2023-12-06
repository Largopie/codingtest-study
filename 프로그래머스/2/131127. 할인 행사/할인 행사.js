function solution(want, number, discount) {
    let answer = 0;
    const purchaseList = {}
    
    want.forEach((val, idx) => {
        purchaseList[val] = number[idx]
    })
    
    for(let i = 0; i < discount.length; i++) {
        const purchaseListCopy = {...purchaseList}
        for(let j = i; j < i+10; j++) {
            if(discount.length < j) break;
            if(purchaseListCopy[discount[j]]) {
                purchaseListCopy[discount[j]] -= 1
            }
        }
        if(!Object.values(purchaseListCopy).reduce((a, b) => a + b)) {
            answer+=1
        }
    }
    return answer
}