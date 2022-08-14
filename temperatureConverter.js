document.querySelector('#arrow').addEventListener('click',showTemp);

function showTemp(){
        const Celsius= document.querySelector('#CelsiusInput').value;
        const Fahr=(Celsius*1.8)+32;
        document.querySelector('#FahrInput').value=Fahr;
}

document.querySelector('#arrow2').addEventListener('click',showTemp2)
function showTemp2(){
    const Fahrenheit=document.querySelector('#FahrInput2').value;
    const toCelsius=(Fahrenheit-32)*5/9;
    document.querySelector('#CelsiusInput2').value = toCelsius;
}