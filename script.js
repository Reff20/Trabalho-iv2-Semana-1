document.querySelector('.date').innerHTML = new Date().toLocaleString()

var texto = document.getElementById('title')

function changeText(){
    
    if(texto.innerText == 'Uchiha Itachi'){
        texto.innerText = 'Uchiha bom é Uchiha vivo!'
        texto.style.marginLeft = '130px'
        texto.style.fontFamily = 'Roboto'
        texto.style.fontWeight = '700'
        texto.style.fontSize = '38px'
        document.getElementById('title').style.padding = '43px'
    }else{
        texto.innerText = 'Uchiha Itachi'
        texto.style.padding = '20px'
        texto.style.marginLeft = '130px'
        texto.style.fontFamily = 'Roboto'
        texto.style.fontWeight = '700'
        texto.style.fontSize = '72px'
        document.getElementById('title').style.padding = '22px'
    }
}





