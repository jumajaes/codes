
// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto 
// limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una 
// función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los
//  regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {

    let arrayOfTheContents = [];
    let exclusionOfLettersRepeated = "";

    for (let iteratorGifts = 0; iteratorGifts < gifts.length; iteratorGifts++) {
       
        exclusionOfLettersRepeated = gifts[iteratorGifts][0];
        
        for (let iteratorExclusion = 1; iteratorExclusion < gifts[iteratorGifts].length; iteratorExclusion++) {

            
            let iteratorExclusionString = 0;
            let count = 0;

            while (iteratorExclusionString < exclusionOfLettersRepeated.length) {

                if (exclusionOfLettersRepeated[iteratorExclusionString] == gifts[iteratorGifts][iteratorExclusion]) {
                    count++;
                }


                iteratorExclusionString++;
                
            }

            if (count == 0) {
                exclusionOfLettersRepeated += gifts[iteratorGifts][iteratorExclusion]
            }

            
        }

        let numberOfCoincidences = 0;

        for (let iteratorGiftsElements = 0; iteratorGiftsElements <exclusionOfLettersRepeated.length; iteratorGiftsElements++) {

            let iteratorMaterials = 0;

            while (iteratorMaterials < materials.length) {

                if (exclusionOfLettersRepeated[iteratorGiftsElements] == materials[iteratorMaterials]) {

                    iteratorMaterials = materials.length;
                    numberOfCoincidences++;

                }

                iteratorMaterials++
            }

        }
        

        if (numberOfCoincidences == exclusionOfLettersRepeated.length) {

            arrayOfTheContents.push(gifts[iteratorGifts]);

        }

    }

    return arrayOfTheContents;

}

console.log(manufacture(['patineta', 'robot', 'libro'], 'nopor'))