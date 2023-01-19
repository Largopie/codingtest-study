def solution(my_string):
    s = my_string.maketrans({'a':None,'e':None,'i':None,'o':None,'u':None})
    return my_string.translate(s)