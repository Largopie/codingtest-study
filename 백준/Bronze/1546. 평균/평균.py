import sys
a = int(input())
b = list(map(int, sys.stdin.readline().split()))
b = list(map(lambda x:x/max(b)*100, b))
print(sum(b)/len(b))