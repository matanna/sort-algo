const array = [552, 6685, 45, 658, 245, 5698, 45879, 231, 12]
let taille = array.length - 1

function tripartas (array, i) {
    if (i < 0) {
        const max = array[0]
        array[0] = array[taille]
        array[taille] = max
        taille--
        console.log(taille)
        return array

    } else {
        const l = 2*i + 1
        const r = 2*i + 2

        let max = ''

        if (array[i] < array[l]) {
            max = array[l]
            array[l] = array[i]
            array[i] = max
        }
        if (array[i] < array[r]) {
            max = array[r]
            array[r] = array[i]
            array[i] = max
        }
        i--
        tripartas(array, i)
        
        return array
    } 
}

for (let j = Math.floor(array.length/2) - 1; j >= 0; j--) {
    console.log(tripartas(array, j))
}
