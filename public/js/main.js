


function gotoSignUp(){
    window.location ="http://localhost:3000/signup"
}

function gotoLogin(){
    window.location ="http://localhost:3000/login"
}

if (document.getElementById("form12")!=null){addEventListener("submit",
 (event) => {
  event.preventDefault();
  const movie = event.target.elements.search.value;
  window.location =`http://localhost:3000/api/search/${movie}`
 
})}


// Calculo la cantidad de resultados que trajo la primer busqueda asi se cuantos event Listener crear.
const resultsLength = [...document.getElementsByClassName('results')].length

// Itero entre los elementos Resultado que hay, para agregarle un eventListener a cada boton, dentro del mismo result. 
//(Aprovecho el indice del for loop para saber cual es el titulo que tengo que elegir)

for (let i = 0; i < resultsLength; i++) {
    //Convierto a array TODOS los titulos del DOM o 'LO QUE VEO EN EL NAVEGADOR = DOM'
let titles = [...document.getElementsByClassName("results")].map((elemento) => elemento.id)

//let botondiv = document.getElementById(`detalle${i}`);
//botondiv.value = results[i].Title



document.getElementById(`detalle${i}`).addEventListener("click",function
 (event) {
     // COMO CLICKEO EL BOTON DEL MISMO INDICE, SE QUE EL TITULO DE MI ARRAY ES EL QUE TIENE EL MISMO INDICE YA QUE: "Cantidad Botones = Cantidad Titulos" 
     // Ejemplo: Como hay 20 results, tengo 20 titulos y veinte botones. Por eso el Titulo Uno coincide con el Boton 1 y gracias a eso puedo usar el INDICE del for.
     console.log("ME CLICKEASTE, RECIBI", titles[i], "TENGO QUE BUSCAR ESTE DETALLE")
     
     window.location =`http://localhost:3000/api/search/detalle/${titles[i]}`
})}



let doc = document.getElementById('createnewMovie')
if(doc){
document.getElementById('createnewMovie1').addEventListener("click", function() {
     window.location ='http://localhost:3000/createMovie'
})
}



const editsMovieLength = [...document.getElementsByClassName('listMovies1')].length

for (let i = 0; i < editsMovieLength; i++) {

let titles1 = [...document.getElementsByClassName("listMovies1")].map((elemento) => elemento.id)

document.getElementById(`editmovie${i}`).addEventListener("click",function
 (event) {
     console.log("ME CLICKEASTE, RECIBI", titles1[i], "TENGO QUE BUSCAR ESTE DETALLE")
     
      window.location =`http://localhost:3000/editMovie/${titles1[i]}`
})}



const resultsLength1 = [...document.getElementsByClassName('results')].length
// Itero entre los elementos Resultado que hay, para agregarle un eventListener a cada boton, dentro del mismo result. 
//(Aprovecho el indice del for loop para saber cual es el titulo que tengo que elegir)

for (let i = 0; i < resultsLength1; i++) {
    //Convierto a array TODOS los titulos del DOM o 'LO QUE VEO EN EL NAVEGADOR = DOM'
let title2 = [...document.getElementsByClassName("resultsimdbID")].map((elemento) => elemento.id)

//let botondiv = document.getElementById(`detalle${i}`);
//botondiv.value = results[i].Title
console.log(title2)


document.getElementById(`favoritos${[i]}`).addEventListener("click",function
 (event) {
     // COMO CLICKEO EL BOTON DEL MISMO INDICE, SE QUE EL TITULO DE MI ARRAY ES EL QUE TIENE EL MISMO INDICE YA QUE: "Cantidad Botones = Cantidad Titulos" 
     // Ejemplo: Como hay 20 results, tengo 20 titulos y veinte botones. Por eso el Titulo Uno coincide con el Boton 1 y gracias a eso puedo usar el INDICE del for.
     console.log("ME CLICKEASTE, RECIBI", title2[i], "TENGO QUE BUSCAR ESTE DETALLE")
     
     window.location =`http://localhost:3000/favorites/${title2[i]}`
})}



/*************************************************/

const resultsLength3 = [...document.getElementsByClassName('listMovies1')].length

for (let i = 0; i < resultsLength3; i++) {
let title3 = [...document.getElementsByClassName("resultpeli")].map((elemento) => elemento.id)
document.getElementById(`delete${[i]}`).addEventListener("click",function
 (event) {
     console.log("ME CLICKEASTE, RECIBI", title3[i], "TENGO QUE BUSCAR ESTE DETALLE")
     window.location =`http://localhost:3000/removeMovie/${title3[i]}`
})}


//trigger para volver al menu del administrador
document.getElementById(`backToMenu`).addEventListener("click",function
 (event) {
     window.location =`http://localhost:3000/movies`
})



