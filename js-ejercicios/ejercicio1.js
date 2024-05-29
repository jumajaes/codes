
// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a 
//más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia
// tenga el índice más pequeño!

// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda 
//ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

function findFirstRepeated(gifts) {
    let moreRepeated = -1;
    let positionOfTheRepeat = gifts.length;

    for (let iteratorFor = 0; iteratorFor < gifts.length - 1; iteratorFor++) {

        let jIteratorWhile = iteratorFor + 1;

        while ( jIteratorWhile< gifts.length) {

            if (gifts[iteratorFor] == gifts[jIteratorWhile]) {

                if (positionOfTheRepeat > jIteratorWhile) {

                    moreRepeated = gifts[iteratorFor];
                    positionOfTheRepeat = jIteratorWhile;

                }
            }

            jIteratorWhile++

        }
    }

    return moreRepeated;
}

console.log(findFirstRepeated(giftIds));