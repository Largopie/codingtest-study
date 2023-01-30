def solution(rsp):
    answer=''
    win={"0":"5", "2":"0", "5":"2"}
    for i in rsp:
        answer+=win[i]
    return answer