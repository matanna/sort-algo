const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 758]

const arraySort = (array) => {
    // on vérifie si le tableau comporte + d'1 élément sinon on renvoie ce même tableau
    if (array.length > 1) {
        const pivot = array[array.length-1]
        const arrayLeft = []
        const arrayRight = []

        //const arrayLeft = array.filter((item) => item < pivot)
        //const arrayRight = array.filter((item) => item > pivot)

        // Si la valeu est > au pivot, on la place dans le tableau de droite sinon dans le tableau de gauche
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                arrayLeft.push(array[i])
            } else {
                arrayRight.push(array[i])
            }
        }
        // on renvoie le tableau concaténé : tableau de gauche + le pivot + tableau de droite
        return [...arraySort(arrayLeft), pivot, ...arraySort(arrayRight)]
    } else {
        return array
    }
}

console.log(arraySort(array))