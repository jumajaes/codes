

// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación
// de regalos, añadiendo o eliminando *un paso* no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada 
// modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el *primer paso extra* que se ha 
// añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias,
//  devuelve una cadena vacía.


function findNaughtyStep(original, modified) {
    // Code here
    let stringExtra = "";

    let minorVariable = "";
    original.length > modified.length ? minorVariable = modified : minorVariable = original;

    let largestVariable = ""
    original.length < modified.length ? largestVariable = modified : largestVariable = original;

    let iterator = 0;


    if (original === modified) {
        return stringExtra;

    } else {

        for (iterator = 0; iterator < minorVariable.length; iterator++) {
            
            if (minorVariable[iterator] != largestVariable[iterator]) {
                return largestVariable[iterator];
            }

        }
        return largestVariable[iterator];
    }

} 

console.log(findNaughtyStep(original, modified))