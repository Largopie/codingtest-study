def solution(nums):
    answer = []
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                count = 0
                comb = nums[i] + nums[j] + nums[k]
                for n in range(1, comb+1):
                    if comb % n == 0:
                        count += 1
                if count == 2:
                    answer.append(comb)
    return len(answer)