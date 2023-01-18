A = int(input())
B = int(input())
Ba = B % 10
sum1 = Ba*A
print(sum1)
B //= 10
Bb = B % 10
sum2 = Bb*A
print(sum2)
B //= 10
sum3 = B*A
print(sum3)
print(sum1+(sum2*10)+(sum3*100))

