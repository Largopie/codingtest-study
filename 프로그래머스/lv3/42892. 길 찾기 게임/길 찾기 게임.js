function solution(nodeinfo) {
    const preAns = [], posAns = []
    const node_num = {}
    
    nodeinfo.forEach((val, idx) => {
         node_num[val] = idx+1
    })
    
    nodeinfo.sort((a, b) => {
        if(a[1] > b[1]) return -1
        else if(a[1] === b[1]){
            if(a[0] < b[0]) return -1
        }
    })
    
    const order = (nodeinfo, preAns, posAns) => {
        const [x, y] = nodeinfo[0]
        const left = []
        const right = []
        
        
        for(let i=1; i < nodeinfo.length; i++){
            const row = nodeinfo[i]
            if(row[0] < x) left.push(row)
            else right.push(row)
        }
        
        preAns.push(node_num[[x,y]])
        if(left.length) order(left, preAns, posAns)
        if(right.length) order(right, preAns, posAns)
        posAns.push(node_num[[x,y]])

        
    }

    order(nodeinfo, preAns, posAns)
    
    return [preAns, posAns]
}