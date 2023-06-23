# 1. americano = 4500, latte = 5000 2. anything = americano
def solution(order):
    dic = {'americano': 0, 'latte': 0}
    
    for i in order:
        if 'latte' in i:
            dic['latte']+=1
        elif 'americano' in i:
            dic['americano']+=1
        elif i == 'anything':
            dic['americano']+=1
    return dic['latte']*5000 + dic['americano']*4500