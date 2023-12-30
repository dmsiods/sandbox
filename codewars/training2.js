// function getCount(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let result = 0;
//
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.has(str[i])) {
//             result += 1;
//         }
//     }
//
//     return result;
// }
//
//
// console.log(getCount('abracadabra'));



// function spinWords(string){
//     let stringArr = string.split(' ');
//
//     for (let i = 0; i < stringArr.length; i++) {
//         if (stringArr[i].length >= 5) {
//             stringArr[i] = stringArr[i].split('').reverse().join('');
//         }
//     }
//
//     return stringArr.join(' ');
// }
//
// console.log(spinWords('123456 123 12    1234'));
//
// console.log('sdfsdfsd'.split(''));


// function squareDigits(num){
//     let numString = num.toString();
//     let newNumArr = [];
//
//     for (let i = 0; i < numString.length; i++) {
//         let digit = parseInt(numString[i], 10);
//         newNumArr.push((digit * digit).toString());
//     }
//
//     let newNumString = newNumArr.join('');
//
//     return parseInt(newNumString, 10);
// }
//
// console.log(squareDigits(1238));


// function findOdd(A) {
//     let uniq = new Set();
//
//     for (let i = 0; i < A.length; i++) {
//         if (uniq.has(A[i])) {
//             uniq.delete(A[i]);
//         } else {
//             uniq.add(A[i]);
//         }
//     }
//
//     return Array.from(uniq)[0];
// }
//
// console.log(findOdd([1, 1, 2]));


// function likes(names) {
//     let result;
//
//     switch (names.length) {
//         case 0:
//             result = 'no one likes this';
//             break;
//         case 1:
//             result = names[0] + ' likes this';
//             break;
//         case 2:
//             result = names[0] + ' and ' + names[1] + ' like this';
//             break;
//         case 3:
//             result = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//             break;
//         default:
//             result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
//
//     return result;
// }
//
// console.log(likes(['a', 'b', 'c', 'd', 'e']));



// function digitalRoot(n) {
//     let numStr = n.toString();
//
//     while (numStr.length > 1) {
//         let newNum = 0;
//
//         for (let i = 0; i < numStr.length; i++) {
//             newNum += parseInt(numStr[i], 10);
//         }
//
//         numStr = newNum.toString();
//     }
//
//     return parseInt(numStr, 10);
// }
//
// console.log(digitalRoot(493193));


// function arrayDiff(a, b) {
//     let bSet = new Set(b);
//     let result = [];
//
//     for (let i = 0; i < a.length; i++) {
//         if (!bSet.has(a[i])) {
//             result.push(a[i]);
//         }
//     }
//
//     return result;
// }
//
// console.log(arrayDiff([1,2,2,2,3],[2]));


// function createPhoneNumber(numbers){
//     numbers = numbers.map((n) => n.toString());
//
//     const first = numbers.slice(0, 3).join('');
//     const second = numbers.slice(3, 6).join('');
//     const third = numbers.slice(6).join('');
//
//     return `(${first}) ${second}-${third}`;
// }
//
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// let x = 123;
// console.log(x.toString(2));
//
//
// var countBits = function(n) {
//     let nStr = n.toString(2);
//     let result = 0;
//
//     for (let i = 0; i < nStr.length; i++) {
//         if (nStr[i] === '1') {
//             result += 1;
//         }
//     }
//
//     return result;
// };


function findOutlier(integers){
    let res = [[0, 0], [0, 0]];

    for (let i = 0; i < integers.length; i++) {
        let idx = Math.abs(integers[i] % 2);

        res[idx][0] += 1;
        res[idx][1] = integers[i];

        if (res[0][0] === 1 && res[1][0] > 1) {
            return res[0][1];
        } else if (res[0][0] > 1 && res[1][0] === 1) {
            return res[1][1];
        }
    }
}

console.log(findOutlier([1564689,-35020965,66285013,145374257,-173237257,-124361181,82811433,28516107,190704389,1012321,-160949974,-34253073]));

// x = [1564689,-35020965,66285013,145374257,-173237257,-124361181,82811433,28516107,190704389,1012321,-160949974,-34253073];
//
// for (let i = 0; i < x.length; i++) {
//     console.log(x[i] % 2);
// }
