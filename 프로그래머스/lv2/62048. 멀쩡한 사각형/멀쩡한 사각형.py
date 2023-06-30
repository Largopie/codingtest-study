def solution(w,h):
    def gcd(a, b):
        gcd_num = 0
        for i in range(1, a+1):
            if a % i == 0 and b % i == 0:
                gcd_num = i
        return gcd_num
    
    w,h = min(w, h), max(w, h)
    
    g = gcd(w, h)
    
    gcd_w = w // g
    gcd_h = h // g
    
    not_use = gcd_w*gcd_h - (gcd_w - 1)*(gcd_h - 1)
    return (w * h) - (not_use * g)
