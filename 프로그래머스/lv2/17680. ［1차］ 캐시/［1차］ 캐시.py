def solution(cacheSize, cities):
    answer = 0
    cache = []
    for i in cities:
        i = i.upper()
        if i in cache:
            cache.remove(i)
            cache.insert(0, i)
            cache = cache[:cacheSize]
            answer+=1
        else:
            cache.insert(0, i)
            cache = cache[:cacheSize]
            answer+=5
    return answer