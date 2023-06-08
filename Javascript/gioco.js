 function Gioco(){

    this.codice = null;
    this.titolo = null;
    this.strumento = null;

    this.numero_giocatori = function(numero_giocatori){
        if (typeof(numero_giocatori)== "number")
            this.giocatori = numero_giocatori;
        else{
            this.minimo = numero_giocatori[0];
            this.massimo = numero_giocatori[1];
        }
    }

    this.setCodice = function(codice){
        this.codice = codice;
    }

    this.setTitolo = function(titolo){
        this.titolo = titolo;
    }

    this.setStrumento = function(strumento){
        this.strumento = strumento;
    }

    this.genHTML = function(ID){
        var node = document.getElementById(ID);
        node.innerHTML = JSON.stringify(this)
    }
 }
 