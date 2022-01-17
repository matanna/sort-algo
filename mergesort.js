const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 12]

function trifusion(array) {
    // Si array a une longueur inférieur ou égale à 1, on arrête la récursivité et on retourne le tableau
    if (array.length > 1) {
        // on initialise le tableau de gauche et le tableau de droite
        const arrayLeft = []
        const arrayRight = []

        // On trouve l'indice médian du tableau. Avec Math.floor on sort un entier même quand la division donne un float - Ex : 3/2=1
        const middle = Math.floor(array.length / 2)

        // On copie les valeurs de gauche dans le tableau de gauche
        for (let i = 0; i < middle; i++) {
            //arrayLeft.push(array[i]) - 2 possibilités
            arrayLeft[i] = array[i]
        }
        // On copie les valeurs de droite dans le tableau de droite
        for (let j = middle; j < array.length; j++) {
            //arrayRight.push(array[j]) - 2 possibilités
            arrayRight[j-middle] = array[j]
        }
        // On rappelle en récursif la fonction pour rediviser les tableau trouvé
        console.log(arrayLeft)
        console.log('=====================================')
        console.log(arrayRight)
        console.log('=========================================================================')
        trifusion(arrayLeft)
        trifusion(arrayRight)

        let i = 0
        leftIndex = 0
        rightIndex = 0

        // On fusionne les 2 tableaux en placant toujours le plus petit chiffre en 1er
        while (leftIndex < arrayLeft.length && rightIndex < arrayRight.length) {
            if (arrayLeft[leftIndex] < arrayRight[rightIndex]) {
                array[i] = arrayLeft[leftIndex]
                leftIndex++
            } else {
                array[i] = arrayRight[rightIndex]
                rightIndex++
            }
            i++
        }

        // Si il reste des valeur dans le tableau de gauche et rien dans le tableau de droite
        while (leftIndex < arrayLeft.length) {
            array[i] = arrayLeft[leftIndex]
            leftIndex++
            i++
        }
        // Si il reste des valeur dans le tableau de droite et rien dans le tableau de gauche
        while (rightIndex < arrayRight.length) {
            array[i] = arrayRight[rightIndex]
            rightIndex++
            i++
        }
    }
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
    console.log(array)
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
    return array
}

console.log(trifusion(array))