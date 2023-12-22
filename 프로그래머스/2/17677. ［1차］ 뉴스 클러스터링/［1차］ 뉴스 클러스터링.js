const eng =  /^[a-zA-Z]*$/;

const splitWord = (word, pattern) => {
    const split = []
    
    for(let i = 0; i < word.length - 1; i++) {
        const twoChar = word[i] + word[i+1]
        if (eng.test(twoChar)) {
            split.push(twoChar.toUpperCase())
        }
    }
    return split
}

const combination = (arr1, arr2, intersectionArr) => {
    const arr = [...arr1, ...arr2]
    
    for(val of intersectionArr) {
        const findIndex = arr.findIndex((element) => element === val)
        arr.splice(findIndex, 1)
    }
    
    return arr
}

const intersection = (arr1, arr2) => {
    const arr = []
    const copyArr1 = [...arr1]
    const copyArr2 = [...arr2]
    
    while(copyArr1.length !== 0) {
        const pop = copyArr1.pop()
        const findIdx = copyArr2.findIndex((element) => element === pop)
        if(findIdx !== -1) {
            const val = copyArr2.splice(findIdx, 1)
            arr.push(val)
        }
    }
    
    return arr
}

function solution(str1, str2) {
    const splitStr1 = splitWord(str1)
    const splitStr2 = splitWord(str2)
    
    const intersectionArr = intersection(splitStr1, splitStr2)
    const combinationArr = combination(splitStr1, splitStr2, intersectionArr)
    const intersectionLength = intersectionArr.length
    const combinationLength = combinationArr.length
    
    if (intersectionLength === 0 && combinationLength === 0) return 65536

    return Math.floor(intersectionLength / combinationLength * 65536)
}