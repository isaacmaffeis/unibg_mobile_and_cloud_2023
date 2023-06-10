"""
Si definisca la classe Gioco in Python. I metodi e le proprietà sono i seguenti
    1. Propetà degli oggetti: Codice, Titolo, strumento
    2. Numero di giocatori: o un numero secco, oppure un oggetto con due campi minimo e massimo
    3. Metodi: setCodice, setTitolo, setGiovatori. 
    4. Costruttore
"""

class Giocatori:
    def __init__(self, minimo, massimo):
        self.minimo = minimo
        self.massimo = massimo


class Giochi:
    def __init__(self):
        self.codice = None
        self.titolo = None
        self.strumento = None
        self.numero_giocatori = None

    def setCodice(self, codice):
        self.codice = codice

    def setTitolo(self, titolo):
        self.titolo = titolo
    
    def setStrumento(self, strumento):
        self.strumento = strumento

    def setNumeroGiocatori(self, numero_giocatori):
        if type(numero_giocatori) == int:
            self.numero_giocatori = numero_giocatori
        else:
            self.numero_giocatori = Giocatori(numero_giocatori[0],numero_giocatori[1])
