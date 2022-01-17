const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 12]

let temp = ''

// On boucle sur tout le tableau, nb de passage est égal au nombre d'élément du tableau
for (let j = 1; j < array.length; j++) {
    /**
     * Pour chaque élément, on boucle dans le sens inverse (de la gauche vers la droite)
     * et on teste les éléments
     * i = j permet de boucler uniquement sur le tableau de la première boucle. Si j est à 2, on teste uniquement les 2 premières entrées
     */
    for (let i = j; i > 0; i--) {
        if (array[i-1] > array[i]) {
            temp = array[i]
            array[i] = array[i-1]
            array[i-1] = temp
        } else {
            break
        }
    }
}

console.log(array)

// On boucle sur tout le tableau, nb de passage est égal au nombre d'élément du tableau
for (let j = 1; j < array.length; j++) {
    /**
     * On donne a i la valeur de la valeur de j-1
     */
    let i = j-1;
    while (i > 0) {
        if (array[i-1] > array[i]) {
            temp = array[i]
            array[i] = array[i-1]
            array[i-1] = temp
        } else {
            break
        }
        i--
    }
}

console.log(array)