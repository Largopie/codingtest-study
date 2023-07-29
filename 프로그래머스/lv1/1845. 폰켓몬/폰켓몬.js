function solution(nums) {
    const a = new Set(nums);
    return ([...a].length > parseInt(nums.length / 2)) ? parseInt(nums.length / 2) : [...a].length;
}