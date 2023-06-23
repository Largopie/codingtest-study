def solution(myStr):
    myStr = myStr.replace('b','a').replace('c','a')

    while 'aa' in myStr:
        myStr = myStr.replace('aa', 'a')
    myStr = myStr.strip('a').split('a')
    return ['EMPTY'] if myStr == [''] else myStr