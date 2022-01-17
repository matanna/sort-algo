const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 12]

let temp = ''

/**
 * On utilise 2 boucles for => un tour complet de tableau par element
 * On boucle une première fois sur le tableau, ce qui va permutter les nombres une première fois et remonter le + grand en haut du tableau
 * A chaque fin de boucle, on reboucle recommencer l'opération sur les éléments restants
 */
for (let i = 0; i < array.length; i++) {     
    for (let j = 0; j < array.length-1; j++) {
        if (array[j] > array[j+1]) {
            temp = array[j+1]
            array[j+1] = array[j]
            array[j] = temp
        }
    }
    
}

console.log(array)

/**
 * On utilise une boucle while et une boucle for
 * isSwapped est passée a false au début de la boucle
 * On boucle sur les éléments du tableau, s'il y a échange, on passe isSwapped a true
 * Tant que is Swapped est a true on recommence la boucle for
 * Si aucun échange n'est effectué, isSwapped reste a false, on sort de la boucle while, le tableau est trié
 */

let isSwapped = true

while (isSwapped === true) {
    
    isSwapped = false
    
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j+1]) {
            temp = array[j+1]
            array[j+1] = array[j]
            array[j] = temp
            isSwapped = true
        }
    }
    
}

console.log(array)