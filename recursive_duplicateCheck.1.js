const sampleData1 = [
    {
        no: 1,
        title: 'C언어',
        grades: 3,
        times: [[1,2], [19,20], [39, 40]],
        description: 'C언어 재밌게 배웁시다',
        books: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788970507385&orderClick=LEA&Kc='
    },
    {
        no: 2,
        title: 'JAVA',
        grades: 2,
        times: [[2, 3], [21, 22], [39, 40]],
        description: '자바 시간입니다.',
        books: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791185578217&orderClick=LEB&Kc='
    },
    {
        no: 3,
        title: 'JavaScript',
        grades: 3,
        times: [[4,5], [11, 12], [39, 40]],
        description: '자바스크립트',
        books: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791163030034&orderClick=LAH&Kc='
    },
    {
        no: 4,
        title: 'Android',
        grades: 2,
        times: [[1,2], [5, 6], [7, 8]],
        description: '안드로이드 수업 입니다.',
        books: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791188612833&orderClick=LAH&Kc='
    }
]


for (index in sampleData1) {
    if (sampleData1[index].grades === 3) {
        sampleData1[index].times_combination = getAllCombinations(sampleData1[index].times, 2);
    } else {
        sampleData1[index].times_combination = sampleData1[index].times
    }
}

function getAllCombinations(arr, m) {
    const combinations = [];
    const picked = [];
    const used = [];
    for (item of arr) used.push(0);
  
    function find(picked) {
      if (picked.length === m) {
        let rst = [];
        for (let i of picked) {
          rst = rst.concat(arr[i])
        }
        combinations.push(rst);
        return;
      } else {
        let start = picked.length ? picked[picked.length-1] + 1 : 0;
        for (let i = start; i < arr.length; i++) {
          if (i === 0 || arr[i] !== arr[i-1] || used[i-1]) {
            picked.push(i);
            used[i] = 1;
            find(picked);
            picked.pop();
            used[i] = 0;
          }
        }
      }
    }
    find(picked);
    return combinations;
  }


let newArr = []
function recursive(arr, data, data1, index) {
    let firsts;
    if (arr[index]) {
        firsts = arr[index].times_combination
    }
    
    if (arr.length === index) {
        newArr.push(data)
        return data;
    }

    for (let i in firsts) {
        const b = data1.concat(firsts[i])
        const a = data.concat({
            ...arr[index],
            enable_times: firsts[i]
        })

        let isDuplicated = false;

        // 중복 검사
        for (let j=0; j< b.length; j++) {
            for (let q=j+1; q<b.length; q++) {
                if (b[j]=== b[q]) {
                    isDuplicated = true;
                    break;
                }
            }
        }

        if (!isDuplicated) {
            recursive(arr, a, b, index+1)
        }
        
    }
}

recursive(sampleData1, [], [], 0)

for (let i=0; i<newArr.length; i++) {
    for (let j=0; j<newArr[i].length; j++) {
        console.log(newArr[i][j].enable_times)
    }
}