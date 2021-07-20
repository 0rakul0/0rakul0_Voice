document.getElementById('falar').addEventListener('click', ()=>{
    dizer(document.getElementById('texto').value);
});

function dizer(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}