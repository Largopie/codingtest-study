const findParent = (parent, node) => {
    if(parent[node] === node) return node;
    
    parent[node] = findParent(parent, parent[node]);
    return parent[node];
}

const unionParent = (parent, firstNode, secondNode) => {
    const firstNodeRoot = findParent(parent, firstNode);
    const secondNodeRoot = findParent(parent, secondNode);
    
    if(firstNodeRoot < secondNodeRoot) {
        parent[secondNodeRoot] = firstNodeRoot
    }
    else {
        parent[firstNodeRoot] = secondNodeRoot
    }
}

function solution(n, costs) {
    const parent = Array.from({length: n}, (val, idx) => idx);
    let sum = 0;
    costs.sort((a, b) => a[2] - b[2]);
    
    for([firstNode, secondNode, cost] of costs) {
        if(findParent(parent, firstNode) !== findParent(parent, secondNode)) {
            unionParent(parent, firstNode, secondNode);
            sum+=cost;
        }
    }
    
    return sum;
}