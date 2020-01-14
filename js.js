/*

write a function that will take a sorted array of numbers and will return 
a new array containing only those numbers that are unique (appear only once in the input array)
(Without using any JS method)
Example:
Input:   arr[] = {1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
Output:  1,4

*/

function unique(array) {
    let uniqueNum = 1;
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let numA = array[i];
        let n = i + 1
        let numB = array[n];

        console.log(' numA: ' + numA + ' numB: ' + numB);
        if (numA !== numB && uniqueNum === 1) {
            uniqueNum =
                newArray.push(numA)
            console.log(uniqueNum);
        }
        if (numA === numB) {
            uniqueNum--;
        }
        if (numA !== numB) {
            uniqueNum = 1;
        }
    }// End for loop
    return newArray;
}// End unique function

const array = [-1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9];
console.log(unique(array));
