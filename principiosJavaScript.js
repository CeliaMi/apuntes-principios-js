// Pasito a pasito con Js 🐢

console.log("la Consola es fundamental SIEMPRE");

//comentarios de una linea
/* comentarios varias lineas*/

//Js tipado débil y dinámico, debil porqué no se lo impones, y dinámico porque lo detecta.


//tipos de variables


/* Hace referencia al alcance, var no respeta del todo si estas dentro o fuera mientras
 let si lo tiene en cuenta por eso es aconsejable usar let
 en vez de var, const mantien un valor constante.*/

//es sensible a mayusculas y minusculas nombrecasa  nombreCasa nombrECasa

var Myname = "Celia";
let  edad = 30;
const cityBorn = "Madrid";
cityBorn.length;
console.log(cityBorn.length);


//tipos de datos
let speciesName = "Tortuga"; //string
let specimen = 8; //number 
let extincion = false; //boolean
// null, // una inexistente o inválido objeto o dirección
// undefined
// let surname;

// BigInt, symbol ;

// console.log(surname);

// gestión de datos

//Arrays son listas
let list = ["pera", "manzana", "melocotón"];
//objetos tienen propiedades.
let fruta = {
    pepitas: true,
    piel: true,
    cascara: false,
    color : ["rojas", "verdes", "amarillas"]
}


//viajar dentro de los objetos los Arrays son los Json que leera e interpretara Js y con ellos le transmite información al resto de lenguajes.

//operadores
const operadoresJs = "+,-,*,/,>,< =,!=, === "

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

/*Igual( ==) Devuelve truesi los operandos son iguales.
No es igual( !=)
Estrictamente igual( ===) Devuelve true si los operandos son iguales y del mismo tipo.
Desigualdad estricta( !==) Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo

&& and
|| or

*/
//Las funciones 🤩
//estructura
//¿Qué son las funciones y métodos JavaScript?
//enseñar gift de la máquina.

//Una función en JavaScript es similar a un procedimiento — 
// un conjunto de instrucciones que realiza una tarea o calcula 
// un valor, pero para que un procedimiento califique como función,
//  debe tomar alguna entrada y devolver una salida donde hay alguna 
//  relación obvia entre la entrada y la salida.

function nombreDelaFuncion(){
 "cosas que pasan dentro de la funcion"
};

function sumaSimple(){
    var numberA = 1;
    let numberB = 8;
    result = numberA + numberB
    return result;
}

//hablar del alcance de las variables.

function suma(a,b){
  result = a + b
  return result;
}

//Olvide decir parámetros (a,b) Argumentos (3,6)
//------->>>>retomando la clase<<<<-------
//funciones PURAS e IMPURAS
//cosas que nos encontramos por ahí arrayFunction

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



//estrutura de bcle for nos permite en una sola linea

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