function solution(routes) {
    routes.sort((arr1, arr2) => {
        if(arr1[1] > arr2[1]) return 1;
        else return -1
    })
    
    let count = 1;
    
    let point = routes[0][1];
    
    for(route of routes) {
        if(route[0] > point){
            point = route[1]
            count++;
        }
    }
    
    return count
}