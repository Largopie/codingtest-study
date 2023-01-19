def solution(new_id):
    re_id = ''
    #1단계
    new_id = new_id.lower()

    #2단계
    for i in new_id:
        if i.islower() or i.isdigit() or i in ['-','_','.']:
            re_id += i

    #3단계
    while '..' in re_id:
        re_id = re_id.replace('..','.')

    #4단계
    re_id = re_id.strip('.')

    #5단계
    if len(re_id) == 0:
        re_id = 'a'

    #6단계
    if len(re_id) >= 16:
        re_id = re_id[:15]
        re_id = re_id.rstrip('.')

    #7단계
    if len(re_id) <= 2:
        while(1):
            re_id += re_id[len(re_id)-1]
            if len(re_id) == 3:
                break
    return re_id