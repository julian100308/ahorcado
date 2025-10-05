const oculta = ['hogar', 'australopitecus', 'jardin', 'juego', 'oceano', 'barranco'];
const palabraoculta = oculta[Math.floor(Math.random() * oculta.length)];
let palabraoculta1 = palabraoculta.replace(/./g, "_ ");
document.querySelector ('.palabraoculta1').innerHTML = palabraoculta1;
const remplazar = (String,character,index) =>{
    return String.substring(0, index) + character + String.substring(index + character.length);
}
let cont=0;
const pal = () =>{
    
    const letra = document.querySelector('input').value;
    let error = true;
    for (i=0; i<palabraoculta.length;  i++)
        {
            if (palabraoculta[i]===letra)
            {
                palabraoculta1= remplazar(palabraoculta1,letra,i*2);
                error = false;
            }
        }
        if (error)
        {
            cont++;
            document.querySelector('.ahorcado').style.backgroundPosition = -cont*100+'px';
        }   
        if(cont===5)
        {
            document.querySelector('.texto').innerHTML = '<h1>perdiste</h1>'
        }
        if(!palabraoculta1.includes("_ "))
        {
            document.querySelector('.texto').innerHTML = '<h1>ganaste</h1>'
        }
        document.querySelector ('.palabraoculta1').innerHTML = palabraoculta1;
}


document.querySelector ('button').addEventListener ('click', pal);
