const getPermutation = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attached);
  });

  return result;
};

const clearDungeonCount = (myFatigue, permutations) => {
    const counts = []
    permutations.forEach((permutation) => {
        let fatigue = myFatigue
        let count = 0
        for([minFatigue, exhaustFatigue] of permutation) {
            if(minFatigue <= fatigue) {
                fatigue -= exhaustFatigue
                count+=1
            }
        }
        counts.push(count)
    })
    
    return Math.max(...counts)
}

function solution(k, dungeons) {
    const permutations = getPermutation(dungeons, dungeons.length);
    
    return clearDungeonCount(k, permutations);
}