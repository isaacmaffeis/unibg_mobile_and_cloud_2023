# -*- coding: utf-8 -*-
"""
Created on Sat May  2 19:56:55 2020

@author: Utente
"""


class Figura:
    def __init__(self, id, tipo):
        self.tipo = tipo
        self.id = id
        return
    def che_tipo(self):
       return self.tipo
    def get_area(self):
       return 0

class Rettangolo(Figura):
    def __init__(self, id, base, altezza):
        super().__init__(id, "Rettangolo")
        self.area = base * altezza
        return
    def get_area(self):
        return self.area

class Triangolo(Figura):
    def __init__(self, id, base, altezza):
        super().__init__(id, "Triangolo")
        self.area = base * altezza /2
        return
    def get_area(self):
        return self.area

elenco = []
elenco.append( Rettangolo(1, 2, 1))
elenco.append( Triangolo(2, 2, 1))

for f in elenco:
    print(f.che_tipo())
    print( f.get_area())
    