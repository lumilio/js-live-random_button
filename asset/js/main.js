


// al click di un pulsante deve apparire un alert con un numero random




/* strumento  

element.addEventListener(event, function, useCapture);

alert()

Math.random()

*/

const theButton = document.getElementById('Mybutton')
theButton.addEventListener('click' , function(){
    alert(Math.random());
})
