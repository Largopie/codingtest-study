def solution(my_string):
    my_string = my_string[::-1]
    for i in my_string:
        if my_string.count(i) > 1:
            my_string = my_string.replace(i,'',1)
    return my_string[::-1]