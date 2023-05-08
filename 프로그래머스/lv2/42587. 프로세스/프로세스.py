from collections import deque

def solution(priorities, location):
    answer=[]
    dqIdx = deque([i for i in range(len(priorities))])
    dqPri = deque(priorities)
    
    while len(dqPri) != 1:
        processPri = dqPri.popleft()
        processIdx = dqIdx.popleft()

        if max(dqPri) > processPri:
            dqPri.append(processPri)
            dqIdx.append(processIdx)
        else:
            answer.append(processIdx)

    answer.append(dqIdx.pop())
    return answer.index(location)+1