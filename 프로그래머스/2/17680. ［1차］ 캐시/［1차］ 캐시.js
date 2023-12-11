function solution(cacheSize, cities) {
    const cache = []
    let runtime = 0
    
    if (cacheSize === 0) return cities.length * 5
    
    for(city of cities) {
        const upperCity = city.toUpperCase()
        
        if(cache.includes(upperCity)) {
            const idx = cache.findIndex((val) => val === upperCity)
            cache.splice(idx, 1)
            cache.push(upperCity)
            runtime+=1
        } else {
            if(cache.length === cacheSize) cache.shift()
            cache.push(upperCity)
            runtime+=5
        }
    }
    
    return runtime
}