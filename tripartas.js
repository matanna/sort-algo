const array = [5, 3, 22, 2, 4, 10, 8]
//const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 12]

// Correspond à la taille du tableau restant à trier
const taille = array.length - 1

/**
 * Fonction principale servant a trier les élément
 * D'abord, on construit un premier tas
 * Ensuite on permute l'élément du haut du tas indice[0] qui est le plus grans avec le dernier
 * Enfin, on rentasse le tas restant qui ne correspond plus a un tas max à cause de la permutation (sans prendre en compte la fin du tableau qui est trié)
 */
function tripartas (array, taille) {
    // D'abord, on construit le premier tas max apartir d'un tableau non trié
    buildtas (array)

    // On permute le premier élément du tas indice[0] qui est le plus grand nombre avec le dernier 
    // et on décrémente taille de 1 a chaque passage pour ne pas prendre en compte les éléments déjà triés en fin de tableau
    for (taille; taille >= 0; taille--) {
        const temp = array[0]
        array[0] = array[taille]
        array[taille] = temp

        // Après la permutation, le tas max n'est plus ok, 
        // on relance dans entasserMax pour le recréer sans prendre en compte le dernier élément qui vent d'être trié (taille-1)
        entasserMax(array, 0, taille -1)
    }
    return array
}

/**
 * Construction du tas max en partant du tableau non trié initial
 * Fonction ne servant qu'au début du tri pour mettre en place le premier tas
 */
function buildtas (array) {
    // taille prend sa valeur maximale correspondant à la longueur max du tableau
    const taille = array.length - 1
    // i correspond à la moitié du tableau, pour commencer le traitement sur le dernier noeud ayant 1 ou deux enfants
    let i = Math.ceil(array.length/2) -1

    // On boucle pour remonter sur l'indice 0 et entasser/permuter pour créer le tas max
    for (i; i >= 0; i--) {
        entasserMax(array, i, taille)
    }
    return array
}

/**
 * Permutation des éléments dans le tas pour qu'un parent soit toujours plus grand que ses 2 enfants
 * On appelle la fonction en récursif de façon à rentasser le tas au cas ou une permutation violerais le principe du tas max
 */
function entasserMax(array, i, taille) {
    let max = i
    // Valeur de l'indice de l'enfant de gauche
    const l = 2*i + 1
    // Valeur de l'indice de l'enfant de droite
    const r = 2*i + 2

    // Si tableau[indice gauche] est plus grand que tableau[i] - L'enfant de gauche est plus grand que son parent
    // l = max
    // Et si l'indice gauche est plus petit ou égal que la taille du tableau restant a trié
    if (l <= taille && array[i] <= array[l]) {
        // max prend la valeur de l'indice gauche
        max = l
    }
    // Si tableau[indice droit] est plus grand que tableau[indice max] (l ou i en fonction de la condition précédente) :
    // l'enfant de droite est plus grand que son parent ET l'enfant de gauche
    // Et si l'indice droit est plus petit ou égal que la taille du tableau restant a trié
    if (r <= taille && array[max] <= array[r]) {
        max = r
    }

    // Si max est different de i, alors on permute
    // On rappelle entasserMax en recursif pour repermutter si besoin le tas qui ne correspond plus a un tas max à cause de cette permutation
    if (max !== i) {
        const temp = array[i]
        array[i] = array[max]
        array[max] = temp
        entasserMax(array, max, taille)
    }
    return array
}

console.log(tripartas(array, taille))