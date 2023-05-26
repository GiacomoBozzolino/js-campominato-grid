// recupero il pulsante per giocare

let play = document.getElementById('play')
console.log(play)
// collego la creazione della griglia al pulsante
play.addEventListener("click", function(){
    // recupero la griglia
let griglia = document.getElementById('griglia')
console.log(griglia)

//  creo la funzione per la creazione dei quadrati della griglia

function squareElement (){
    let square = document.createElement('div')
    square.classList.add('square')
    return square
}
// realizzo un ciclo for per la creazione ripetuta dei quadrati
    for ( i = 0; i < 100; i++ ){
        let square = squareElement ();
        square.innerText= i+ 1
        console.log(square)

        // aggiungo l'evento al click su quadrato
        square.addEventListener('click', function (){
            
            this.classList.add('clicked');
        })



        griglia.append(square)
    }























});