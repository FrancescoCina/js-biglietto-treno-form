console.log("JS OK");

/*
TRACCIA:
Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)

*/

/*
PASSAGGI:
1- recuperare tutti gli elementi HTML (sia dati passeggero che il tuo biglietto) di cui ho bisogno;
2- creare il button con stato al click;
3- definire la logica di funzionamento del programmino;
3a- calcolare il prezzo * 0.21;
3b- applicare gli sconti con if/else if;
3c- Modificare il prezzo finale con max due decimali;
4- inserire la logica all'interno del button al click;
5- fare gli innerHTML per i dati del biglietto;
5a- stampa HTML nome
5b- stampa HTML rate(tariffa);
5c- stampa HTML Carrozza;
5d- stampa codice treno (stringa fissa);
5e- stampa HTML prezzo del biglietto;
6- in chiusura del "button click" azzerare valori HTML di dati di viaggio;
7- aprire click button per reset;
8- azzerare tutti i dati al click;
9- rendere invisibile sezione "il tuo biglietto fino a click genera";
10- ritocca HTML e CSS;
*/
// RECUPERO ELEMENTI HTML

// Sezione inserisci i tuoi dati di viaggio
var namePassegnerElement = document.getElementById("name-passenger");
var kmsElement = document.getElementById("kms");
var ageElement = document.getElementById("passenger-age");

// sezione il tuo biglietto
var namePassegner = document.getElementById("name");
var rate = document.getElementById("rate");
var car = document.getElementById("car");
var trainCode = document.getElementById("train-code");
var ticketPrice = document.getElementById("ticket-price");


