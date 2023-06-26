/*
1. Usando una función flecha de una sola línea de código y sin usar instrucción return, resuelva 
el siguiente problema: crear una función que tenga como parámetros de tipo number la base y la 
altura de un rectángulo y retorne su área. Recuerde que el área de un rectángulo es base x altura
*/

const areaRectangulo = (base:number, altura:number)=> base*altura;

console.log(areaRectangulo(4,5));


/* 
2. Dado el siguiente arreglo [1, 45, 72, 88] cree y ejecute una promesa que al 
cabo de cuatro segundos, si el arreglo no está vacío,  muestre los elementos pares 
del arreglo y luego se resuelva con la frase “Pares mostrados”. En caso de que el 
arreglo este vacío, la promesa debe rechazarse con un mensaje “Este arreglo no contiene números”
*/


const arreglo:number[] = [1, 45, 72, 88];

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (arreglo.length > 0) {
            const numeros = arreglo.filter(numero => numero % 2 == 0);
            resolve(`numero pares = ${numeros}`);
        } else {
            reject("arreglo sin numeros");
        }
    }, 4000);
});

promesa.then(resultado =>{
    console.log(resultado);
})
.catch(Error => {
    console.log(Error);
})

/* 
3. Cree una función que retorne una promesa de tal manera que al cabo de 
3 segundos ésta se resuelva con el valor “ok”, en caso de rechazarse debe 
hacerlo con el valor “-”. Luego llame a la función de forma que se comporte 
sincrónicamente usando async-await, de tal manera que obtenga su valor de 
resolución o de rechazo y lo imprima.
*/

//solución 1
function miFuncion () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
           const valores = Math.random();
           if (valores< 0.5) {
            resolve("ok");
           } else {
            reject("-");
           }

        }, 3000);
    })
}

(async () => {
    try{
        const resultado = await miFuncion();
        console.log("El valor de resultado",resultado);
    }catch(Error){
        console.log("El valor de rechazo", Error);
        
    }
})();

//solución 2
function miFuncion2(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const valor = "ok"; // Cambia el valor aquí si deseas que sea rechazado
        if (valor === "ok") {
          resolve(valor);
        } else {
          reject("-");
        }
      }, 3000);
    });
  }
  
  (async () => {
    try {
      const resultado = await miFuncion2();
      console.log("El valor de resultado", resultado);
    } catch (error) {
      console.log("El valor de rechazo", error);
    }
  })();
  