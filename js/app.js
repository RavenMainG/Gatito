let boton1 = document.getElementById('0')
let boton2 = document.getElementById('1')
let boton3 = document.getElementById('2')
let boton4 = document.getElementById('3')
let boton5 = document.getElementById('4')
let boton6 = document.getElementById('5')
let boton7 = document.getElementById('6')
let boton8 = document.getElementById('7')
let boton9 = document.getElementById('8')

let contador = 1
let ganador
let objGato = {
    1: null, 
    2: null, 
    3: null, 
    4: null, 
    5: null, 
    6: null, 
    7: null,
    8: null,
    9: null,
}

let reiniciar = document.querySelector('.reiniciar')
let botones = document.querySelectorAll('.boton')
let win = document.querySelector('.win')
// console.log(botones)

const calGanador = (obj) => {
    let ganador
    console.log(obj)
    if((obj[5] == obj[1] && obj[5] == obj[9]) || (obj[5] == obj[2] && obj[5] == obj[8]) || (obj[5] == obj[3] && obj[5] == obj[7]) || (obj[5] == obj[4] && obj[5] == obj[6])){
        ganador = `${obj[5]}`
        console.log(ganador)
    }else if((obj[1] == obj[2] && obj[1] == obj[3]) || (obj[1] == obj[4] && obj[1] == obj[7])){
        ganador = `${obj[1]}`
        console.log(ganador)
    }else if((obj[9] == obj[3] && obj[9] == obj[6]) || (obj[9] == obj[7] && obj[9] == obj[8])) {
        ganador = `${obj[9]}`
        console.log(ganador)
    }
    return ganador
}

const botonesEstados = () => {
    boton1.disabled = true
    boton2.disabled = true
    boton3.disabled = true
    boton4.disabled = true
    boton5.disabled = true
    boton6.disabled = true
    boton7.disabled = true
    boton8.disabled = true
    boton9.disabled = true
}

const verificarGanador = (obj) => {
    let ganador = calGanador(obj)
    console.log('ganador: ', ganador)
    console.log('Condicion: ',(ganador != 'null' && ganador != undefined) )

    if(ganador == 'null' || ganador == undefined){
        console.log('dentro de false')
        return false
    }else{
        console.log('dentro de ganador')
        win.innerHTML = `${ganador}`
        botonesEstados()
        return true
    }
}

reiniciar.addEventListener('click', () => {
    win.innerHTML = ''
    botones.forEach(element => {
        element.innerHTML = ''
        element.disabled = false
        contador = 1
        for(let i = 1; i <= 9; i ++){
            objGato[i] = null
        }
    });
    console.log(objGato)
})


boton1.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton1.innerHTML = 'o'
        objGato[1] = 'o'
    }else{
        boton1.innerHTML = 'x'
        objGato[1] = 'x'
    }
    verificarGanador(objGato)
    boton1.disabled = true
    contador ++
    console.log(contador)
})

boton2.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton2.innerHTML = 'o'
        objGato[2] = 'o'
    }else{
        boton2.innerHTML = 'x'
        objGato[2] = 'x'
    }
    verificarGanador(objGato)
    boton2.disabled = true
    contador ++
    console.log(contador)
})

boton3.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton3.innerHTML = 'o'
        objGato[3] = 'o'
    }else{
        boton3.innerHTML = 'x'
        objGato[3] = 'x'
    }
    verificarGanador(objGato)
    boton3.disabled = true
    contador ++
    console.log(contador)

})

boton4.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton4.innerHTML = 'o'
        objGato[4] = 'o'
    }else{
        boton4.innerHTML = 'x'
        objGato[4] = 'x'
    }
    verificarGanador(objGato)
    boton4.disabled = true
    contador ++
    console.log(contador)
})

boton5.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton5.innerHTML = 'o'
        objGato[5] = 'o'
    }else{
        boton5.innerHTML = 'x'
        objGato[5] = 'x'
    }
    verificarGanador(objGato)
    boton5.disabled = true
    contador ++
    console.log(contador)
})

boton6.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton6.innerHTML = 'o'
        objGato[6] = 'o'
    }else{
        boton6.innerHTML = 'x'
        objGato[6] = 'x'
    }
    verificarGanador(objGato)
    boton6.disabled = true
    contador ++
    console.log(contador)
})

boton7.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton7.innerHTML = 'o'
        objGato[7] = 'o'
    }else{
        boton7.innerHTML = 'x'
        objGato[7] = 'x'
    }
    verificarGanador(objGato)
    boton7.disabled = true
    contador ++
    console.log(contador)
})

boton8.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton8.innerHTML = 'o'
        objGato[8] = 'o'
    }else{
        boton8.innerHTML = 'x'
        objGato[8] = 'x'
    }
    verificarGanador(objGato)
    boton8.disabled = true
    contador ++
    console.log(contador)
})

boton9.addEventListener('click', () =>{
    if (contador % 2 == 0) {
        boton9.innerHTML = 'o'
        objGato[9] = 'o'
    }else{
        boton9.innerHTML = 'x'
        objGato[9] = 'x'
    }
    verificarGanador(objGato)
    boton9.disabled = true
    contador ++
    console.log(contador)
    
})


