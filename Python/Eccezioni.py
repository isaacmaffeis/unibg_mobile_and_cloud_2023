# -*- coding: utf-8 -*-
"""
Created on Sun May  3 11:54:28 2020

@author: Utente
"""

op1 = int(input("Dividendo:"))
op2 = int(input("Divisore"))
try:
    n = op1 / op2
except ZeroDivisionError as err:
        print('Invalid operation ({})!'.format(err))
        raise err
except ArithmeticError:
    print('Invalid operation!')
else:
    print("Risultato: {}", n)
    
class MyException(Exception):
    pass

raise MyException("CIAO")