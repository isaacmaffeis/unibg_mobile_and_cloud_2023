 /* Si crei la funzione Gioco, che funge da costruttore di oggetti con le seguenti caratteristiche: 
    1. Propetà degli oggetti: Codice, Titolo, strumento
    2. Numero di giocatori: o un numero secco, oppure un oggetto con due campi minimo e massimo
    3. Metodi: setCodice, setTitolo, setStrumento, setGiocatori, genHTML (genera una rappresentazione
       semplificata del gioco in HTML, a vostra scelta, che inserisce in un elemento della
       pagina di cui riceve il valore dell'id) */
 
 function Gioco(){

    this.codice = null;
    this.titolo = null;
    this.strumento = null;
    this.numero_giocatori = null

    this.setCodice = function(codice){
        this.codice = codice;
    }

    this.setTitolo = function(titolo){
        this.titolo = titolo;
    }

    this.setStrumento = function(strumento){
        this.strumento = strumento;
    }

    this.setGiocatori = function(numero_giocatori){
        if (typeof(numero_giocatori) == "number")
            this.numero_giocatori = numero_giocatori;
        else {
            try{
                this.numero_giocatori = {
                    minimo : numero_giocatori[0],
                    massimo : numero_giocatori[1]
                }
            } catch(e){
                alert("An exception occurred." + "Error name: " + e.name +
                ". Error message: " + e.message);
            }
        /* else {
            this.numero_giocatori = new Object();
            this.numero_giocatori.minimo = numero_giocatori[0];
            this.numero_giocatori.massimo = numero_giocatori[1];
            } */
        }
    }

    this.genHTML = function(ID){
        var node = document.getElementById(ID);
        node.innerHTML = JSON.stringify(this)
    }
 }
