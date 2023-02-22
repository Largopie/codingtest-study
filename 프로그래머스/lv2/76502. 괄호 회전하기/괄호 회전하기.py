def solution(s):
    answer=0
    for i in range(len(s)):
        newString = s[i:]+s[:i]
        stack=[]
        for j in newString:
            if len(stack) == 0 and ( (j == ']') or (j == '}') or (j == ')')):
                stack.append('1')
                break
        
            if j in ['[','{','(']:
                stack.append(j)
                continue

            if len(stack) != 0:
                if j == ']' and stack[-1] == '[':
                    stack.pop()
                elif j == '}' and stack[-1] == '{':
                    stack.pop()
                elif j == ')' and stack[-1] == '(':
                    stack.pop()
                else:
                    stack.append('1')
                    break
            else:
                stack.append('1')
                break
        if len(stack) == 0:
            answer+=1
    return answer