function solution(skill, skill_trees) {
    let answer = 0
    
    skill_trees.forEach((skills) => {
        const linkedSkill = skill.split('')
        const skillTree = skills.split('').filter((val) => linkedSkill.includes(val))
        
        if(skillTree.every((val, idx) => val === linkedSkill[idx])) answer++
    })
    
    return answer
}