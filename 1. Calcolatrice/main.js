function sommaValore() {
    // Ottenere il riferimento all'elemento di input
    var primoNumero = document.getElementById('primo_numero');
    var secondoNumero = document.getElementById('secondo_numero');
  
    // Ottenere il valore dalla casella di testo
    var primo = parseFloat(primoNumero.value);
    var secondo = parseFloat(secondoNumero.value);
    var somma = primo + secondo;
    var sottrazione = primo - secondo;
    var moltiplicazione = primo * secondo 
    var divisione = primo / secondo 
  
    document.getElementById('somma').value = somma;
    document.getElementById('sottrazione').value = sottrazione;
    document.getElementById('moltiplicazione').value = moltiplicazione;
    document.getElementById('divisione').value = divisione;

  }
  
let interruttore = false;

function attivaOn() {
    const button = document.getElementById('button');
    const bottone = document.getElementById('bottone');
    if (interruttore){
    button.src = "off.png";
    bottone.textContent = 'on';
    interruttore = false;
    }
    else{
      button.src = "on.png";
      bottone.textContent = 'off';
      interruttore = true;
    }
  }