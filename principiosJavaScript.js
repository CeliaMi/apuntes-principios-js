// Pasito a pasito con Js 🐢
console.log("la Consola es fundamental SIEMPRE");

//1️⃣COMENTARIOS----------
//comentarios de una linea
/* comentarios varias lineas*/

//Js tipado débil y dinámico//

//2️⃣VARIABLES----------

// tipos de variables
// var let y const

//diferencias entre var y let
// if(true){
//     var variableWithVar = 1
//     let variableWithLet = 2
//    }

// console.log(variableWithVar)
// console.log(variableWithLet)

const coder = "Fátima"
const teacher = "Ana"

//3️⃣OPERADORES Y PALABRAS RESERVADAS----------

const operadoresJs = "+,-,*,/,>,< =,!=, === "

//operadores aritméticos
//operadores Comparación

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

console.log(4 > 2 || 2 < 1)

/*Igual( ==) Devuelve true si los operandos son iguales.
No es igual( !=)
Estrictamente igual( ===) Devuelve true si los operandos son iguales y del mismo tipo.
Desigualdad estricta( !==) Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo
> Mayor que
< Menor que
//Operadores lógicos
&& and
|| or
*/



//4️⃣TIPOS DE DATOS----------

//type number
let ageTeacher = 32

console.log(ageTeacher)
//type boolean
const isAdmin = false;
//type null
const DNI = null
const typeUndefined = undefined
//Arrays
const coders = ["Sara", "Oury", "César", "Dario"]


//objetos {}

 let nombreObjeto = {
 clave: 'valor', clave: 'valor'}
let juan = {
    name: "Juan",
    age: 30,
    direction: null,
    isAdmin: true
}

// console.log(juan.age);

//Array de objetos
const users = [
    { id: 1, name: "Ana" }, { id: 2, name: "Pedro" }
]


//5️⃣FUNCIONES----------

function elNombreDeMiFuncion(){

    "escribimos lo que hace nuestro función"

    return "devolver algo"

}

function saidGoodBye(){
    return "Good Bye"
}


const suma = 1 + 1
// console.log(suma)

function sumar(a,b){
    return a + b
}

console.log(suma)
console.log(sumar(2,3))
console.log(sumar(4,5))

sumar()


// parámetros (a,b) Argumentos (3,6)
//funciones PURAS e IMPURAS

//pura
function sumaPura(a,b){
    result = a + b
    return result;
  }

//impura
let c = 5;

function sumaImpura(a,b){
    // let c = 5;
    result = a + b + c
    return result;
  }

console.log(sumaImpura(1,2));

//escribir variables dentro de un string

function sayHello(name = 'nueva usuaria'){
    return `¡Hello ${name}!`
    // return "¡Hello" + person + "!"
}

//person = document.getElementById('UserName').value;
//<input id="UserName"></input>
person = "Sandra"
function sayMyHello(person){
    return `¡Hello ${person}!`
    // return "¡Hello" + person + "!"
}

function sayHello(name = 'nueva usuaria'){
    return `¡Hello ${name}!`
    // return "¡Hello" + person + "!"
}


console.log(sayHello("Celia"));
console.log(sayMyHello(person));


//CONDICIONALES
//mi funcion devuelve o hace cosas si la condicion se cumple

function mayorEdad(a){
    if(a >= 18){ 
        alert( "Eres mayor de edad")
    }else{
        return "eres menor"
    }
};

console.log(mayorEdad(16));


//BUCLES
//for
//array de obejas

// let sleepSheep = [ true,false,true,true,false];

// function counter(sleepSheep){
//     count = 0;
//     for(let i = 0; i<= sleepSheep.lenght; i++){
//         if(sleepSheep[i] === true){
//             count ++;
//         }
//     }
//     console.log(`En la lista tenemos ${count} ovejas dormidas`)
// };

// counter(sleepSheep);
// console.log(counter(sleepSheep));
// BUCLES!!!!
//ciertas partes del codigo se ejecuten varias veces dependiendo de una condicion.
// 3 elemementos que controlan el flujo de ejecucion de un bucle.
// 1 inicializacion (fija los valores)
// 2 CONDICION de PERMANENCIA
// 3 actualizacionde la variable

// 1bucle while
// mientras  mientras s ecumpla la condicion se ejecuta el codigo

function bucleWhile(num){
    let i = 0;
    while(i < num){
        console.log(i);
        i++;
    }
};

console.log(bucleWhile(10));



//estrutura de bucle for nos permite en una sola linea

// for(inicializacion; condicion de permanencia: la actualizacion){

// }

function bucleFor(num){
    for (let i=0; i<num; i++){
        console.log(i);
    }
};

console.log(bucleFor(10));
//el ciclo for se usa mucho para recorrer arrays

let data = [1,2,3,4,5];
for (let i = 0; i< data.length; i++){
    console.log(i);
}



//while


// function comparacion(a,b){
//     result = a === b
//     return result;
// }

// function mayor(a, b){
//     result = a > b 
//     return result;
// }

// console.log(suma(5,6));
// console.log(comparacion(5,6));
// console.log(mayor(5,2));
// console.log(sumaSimple());


//condicionales
// if, else;
// while;

// let helado = 'chocolate';
// if (helado === 'chocolate') {
//   alert('¡Sí, amo el helado de chocolate!');
// } else {
//   alert('Awwww, pero mi favorito es el de chocolate...');
// }





//arrow function
//palabras reservadas
//métodos
//condicionales
//declarativo imperativo

//json javaScriptObjectsNotation
//network navegador

//DOM DocumentObjetModel el arbol de elementos que tiene nuestra página web tiene un raiz que es html




        // const edadUser = document.getElementById("edad");
        // const button = document.getElementById("button");
        // const respuesta = document.getElementById("response");

        // button.addEventListener("click", function () {
        //  const edadUser = edad.value;
        //  if (edadUser>29) {
        //     respuesta.innerHTML = "Ambos sabemos que ya no eres joven, pero sigues molando... ❤";

        //     } else {
        //     respuesta.innerHTML = "pero bueno..¡Qué joven!, seguro que aún tienes dientes de leche...🦷";
        // }
        // });


let muestra = "casa"

console.log(muestra.length);
alert("Hola chicas"); 