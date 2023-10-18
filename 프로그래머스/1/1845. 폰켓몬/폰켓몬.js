function solution(nums) {
    const arrToSet = new Set(nums)
    const maxLength = nums.length / 2
    const setLength = arrToSet.size
    
    return maxLength > setLength ? setLength : maxLength
}