// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe
// non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora 
// di rosso.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile
//  di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente 
// ha cliccato su una cella che non era una bomba.


// collego bottone con js quando clicco si vedono tutte le celle
let btnStart = document.querySelector('.btn-start'); // dom element


// creo collegamento con main-box dove inserirò le celle
let boxCell = document.querySelector('.main-box')


let gameOver = false;

// creo ascolto evento clic sul button gioca ora
// da questo ascolto ne conseguono tutte le logiche 
btnStart.addEventListener('click', function () {
    // creo collegamento con la select (quando l'utente clicca sul button, js legge la value della select)
    let interation = parseInt(document.getElementById('select').value); // dom element

    // dichiaro l'elemento del dom (dove appendo la griglia) stringa vuota
    // cosi se cambio valore della select mi genera una griglia nuova che sosrituisce la precedente
    boxCell.innerHTML = '';


    // creo ciclo in relazione della value della select 
    for (let i = 1; i < interation; i++) {
        // creo elemento dom
        let cell = document.createElement('button')
        // gli stampo il suo numero
        cell.innerHTML += [i]


        if (interation === 50) {
            cell.classList.add('level-3')
            boxCell.append(cell)

        } else if (interation === 82) {
            cell.classList.remove('level-3')
            cell.classList.add('level-2')
            boxCell.append(cell)
        } else {
            cell.classList.remove('level-2')
            cell.classList.add('cell')
            boxCell.append(cell)
        }


        // ***** COLORE ******

        // aggiungo evento ascolto sulla singola cella con classe .cell
        cell.addEventListener('click', function () {

            if (gameOver === false) { // Se il gioco non è ancora finito
                let cellNumber = parseInt(cell.innerHTML);
                let counterPoint = document.querySelector('.counter')
                let point = counterPoint.textContent;

                if (arrayBomb.includes(cellNumber)) { // Abbiamo trovato una bomba
                    cell.classList.add('bg-bomb');
                    counterPoint.textContent = 'GAME OVER'
                    gameOver = true;
                } else {
                    cell.classList.toggle('bg-change')
                    point++
                    counterPoint.textContent = point
                }

                
                

                console.log(arrayBomb)

                // stampo in console numero casella
                console.log('cella cliccata n: ' + cellNumber);
            }

            

        })
        

        
        


        


    }
    // creo una funzione al di fuori del primo ciclo for
    // lo scopo è quello di generare dei numeri random
    // usando come range di riferimento la value dela select
    function generateRandomNumber(range) {
        let randomNumber = Math.floor(Math.random() * range + 1)
        return randomNumber
    }


    //  dichiaro array vuoto che sarà riempito di numeri
    const arrayBomb = []; // array da riempire
    //  creo variabile del numero di bombe -1 che creo
    const numberOfBomb = 17;
    // creo ciclo che mi pusha all'interno dell'array i numeri random
    // rifrimento numberOfBomb
    for (let j = 1; j < numberOfBomb; j++) {
        // invoco la funzione che mi genera i numeri random
        let rangeBomb = generateRandomNumber(interation)
        // pusho i numeri random generati dalla funzione
        arrayBomb.push(rangeBomb)
        // creo ciclo che legge array per vedere se ci sono numeri uguali
        for (let k = 0; k < arrayBomb.length; k++) {
            if (arrayBomb.includes(k === k)) {
                arrayBomb.push(rangeBomb)
            }
        }



    }




})












