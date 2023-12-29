// function triangle(row) {
//     let rowArr = Array.from(row);
//
//     while (rowArr.length > 1) {
//         let newRowArr = [];
//
//         for (let i = 0; i < rowArr.length - 1; i++) {
//             if (rowArr[i] === rowArr[i + 1]) {
//                 newRowArr.push(rowArr[i]);
//             } else {
//                 let colors = new Set(["R","G","B"]);
//                 colors.delete(rowArr[i]);
//                 colors.delete(rowArr[i + 1]);
//                 newRowArr.push(Array.from(colors)[0]);
//             }
//         }
//
//         rowArr = newRowArr;
//     }
//
//     return rowArr[0];
// }
//
//
// console.log(triangle('RBRGBRBGGRRRBGBBBGG'));
//




// var humanYearsCatYearsDogYears = function(humanYears) {
//     let result;
//
//     switch (humanYears) {
//         case 1:
//             result = [humanYears, 15, 15];
//             break;
//         case 2:
//             result = [humanYears, 24, 24];
//             break;
//         default:
//             catYears = 24 + 4 * (humanYears - 2);
//             dogYears = 24 + 5 * (humanYears - 2);
//             result = [humanYears, catYears, dogYears];
//     }
//
//     return result;
// }
//
// console.log(humanYearsCatYearsDogYears(10));



// function findShort(s){
//     let words = s.split(' ');
//     let minLen = words[0].length;
//
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < minLen) {
//             minLen = words[i].length;
//         }
//     }
//
//     return minLen;
// }

function findShort(s){
    return Math.min(...s.split(" ").map(s => s.length));
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"));

