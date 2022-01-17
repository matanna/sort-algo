const array = [552, 6685, 45, 658, 245, 5698, 45879, 658, 231, 12]

function selectionSort(array) {
    let temp = ''
    for (let i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array)
}

console.log(selectionSort(array))