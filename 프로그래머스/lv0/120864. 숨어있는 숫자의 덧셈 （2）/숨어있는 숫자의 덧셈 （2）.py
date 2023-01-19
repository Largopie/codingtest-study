def solution(my_string):
    for i in my_string:
        if i.isalpha():
            my_string = my_string.replace(i, '+')
    my_string = my_string.strip('+')
    my_string = my_string.replace('++','+')
    return 0 if my_string == '' else eval(my_string)