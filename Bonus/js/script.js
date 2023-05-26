// recupero il pulsante per giocare

let play = document.getElementById('play')
console.log(play)
// collego la creazione della griglia al pulsante
play.addEventListener("click", function(){
    // recupero la griglia
   let  griglia = document.getElementById('griglia')

//  creo la funzione per la creazione dei quadrati della griglia

function squareElement (){
    let square = document.createElement('div')
    square.classList.add('square')
    return square
}

 let level = document.getElementById('level').value
 console.log(level)
if ( level === '1'){
    for ( i = 0; i < 100; i++ ){
        let square = squareElement ();
        square.classList.add('easy')
        square.innerText= i+ 1
        console.log(square)
    
        // aggiungo l'evento al click su quadrato
        square.addEventListener('click', function (){
            this.classList.add('clicked');
            console.log(`Hai cliccato sulla casella numero: ${square.innerText}`)
        })
    
        griglia.append(square)
    } 
} else if (level === '2') {
    for ( i = 0; i < 81; i++ ){
        let square = squareElement ();
        square.innerText= i+ 1
        square.classList.add('medium')
        // console.log(square)
    
        // aggiungo l'evento al click su quadrato
        square.addEventListener('click', function (){
            this.classList.add('clicked');
            console.log(`Hai cliccato sulla casella numero: ${square.innerText}`)
        })
    
        griglia.append(square)
    } 
        
} else {
    
    for ( i = 0; i < 49; i++ ){
        let square = squareElement ();
        square.classList.add('hard')
        square.innerText= i+ 1

        // console.log(square)
    
        // aggiungo l'evento al click su quadrato
        square.addEventListener('click', function (){
            this.classList.add('clicked');
            console.log(`Hai cliccato sulla casella numero: ${square.innerText}`)
        })
    
        griglia.append(square)
    }
}

// realizzo un ciclo for per la creazione ripetuta dei quadrati


});

