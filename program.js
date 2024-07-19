// Program for Array Mapping

function arrayMap(arr) {
    
    let res = arr.map(n => n*2);
    return res;
}

let arr = [1,2,3,4]

console.log(arrayMap(arr));

// // Program for Array Filtering

function arrayFilter(arr) {
    let res = arr.filter(x => x>3);
    return res
}

console.log(arrayFilter(arr));

// Program to find first occurance of an element

function findOccurance(arr, num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            return i;
        }
    }
}

let arr = [1,2,3,1,3];

console.log(findOccurance(arr, 3));

// Program to Merge two Arrays

function mergeArrays(arr1, arr2) {
    let len = arr1.length;

    for(let i=0; i<arr2.length; i++){
        arr1[len++] = arr2[i]; 
    }

    return arr1;
}

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(mergeArrays(arr1, arr2));

// Program to find an element 

function arrayFind(arr) {
    let res = arr.find(x => x>3);
    return res;
}

let arr = [1,2,55,4,6];

console.log(arrayFind(arr));


