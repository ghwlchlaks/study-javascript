const sampleData = [
   [ 
       [1, 2, 19, 20],
        [1, 2 ,39, 40],
        [19, 20, 39, 40]
    ],
    [
        [2,3],
        [21, 22],
        [39, 40]
    ]
]

newArr = []
function recursive(arr, data, index) {
    const firsts = arr[index]
    
        
    if (arr.length === index) {
        newArr.push(data)
        return data;
    }

    for (let i in firsts) {
        const a = data.concat(firsts[i])

        recursive(arr, a, index+1)
    }
}

recursive(sampleData, [], 0)
console.log(newArr)