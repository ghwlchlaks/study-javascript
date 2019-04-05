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
    ],
    [
        [4,5, 11, 12],
        [4, 5, 39, 40],
        [11, 12, 39, 40]
    ],
    [
        [1,2],
        [5,6],
        [7,8]
    ]
]

newArr = []
function recursive(arr, data, index) {
    const firsts = arr[index]
    // console.log(firsts)
        
    if (arr.length === index) {
        newArr.push(data)
        return data;
    }

    for (let i in firsts) {
        const a = data.concat(firsts[i])
        let isDuplicated = false;
        // console.log(a)
        // 중복 검사
        for (let j=0; j< a.length; j++) {
            for (let q=j+1; q<a.length; q++) {
                if (a[j] === a[q]) {
                    isDuplicated = true;
                    break;
                }
            }
        }

        if (!isDuplicated) {
            recursive(arr, a, index+1)
        }
        
    }
}

recursive(sampleData, [], 0)
console.log(newArr)