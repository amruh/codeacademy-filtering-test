// 2
function segitiga(x){
	let count = 1;
    for(let i=x; i<=x+6; i++){
        let line = '';
        for(let j=i; j<=count+i-1; j++){
            line+=`${j} `;
        }
        console.log(line);
        count++;
    }
}

// 3
function findTarget(arr, x){
	for(let i=0; i<arr.length; i++){
  	    if(arr[i] === x) return i;
    }
}

// 4
function addSum(arr, x){
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] + arr[j] === x) return [i,j]
        }
    }
}

// 5
function sumZero(arr){
    let result = [];
    arr.sort((a,b) => a-b);
    result.push(arr[0], arr[1]);
    for (let i=2; i<arr.length; i++){
        if(result[0] + result[1] + arr[i]==0) result.push(arr[i]);
    }
    return result;
}

// 6
function plusOneDigit(arr){
	const result = []; 
	const join = arr.join('');
 	const plusOne = parseInt(join) + 1;
    const plusOneStr = plusOne.toString();
    for(let i=0; i<plusOneStr.length; i++){
        result.push(Math.abs(plusOneStr[i]))
    }
    console.log(result);
}

// 7
function sameDifferentArray(arr1, arr2){
    const arrUnion = [...arr1, ...arr2];
    const same = [];
    const diff = [];
    const obj = {};
    for(let i of arrUnion){
        obj.hasOwnProperty(i) ? obj[i]++ : obj[i] = 1;
    }
    for(let j in obj){
        obj[j] > 1 ? same.push(j) : diff.push(j);
    }
    console.log(`Same = [${same}]`);
    console.log(`Different = [${diff}]`);
}

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol", "Nangka","Timun"];

// 8
function isPalindrome(arr){
	let count = 0;
	for(let i=0; i<arr.length / 2; i++){
 		if(arr[i].toLowerCase() == arr[arr.length-1-i].toLowerCase()){
    	    count++;
        }
    }
    if(count>=arr.length / 2) return true;
    return false;
}

// 9
function minMaxArray(arr){
	for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i==j) continue;
            if(arr[j] > arr[i]) [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }
    console.log(`min = ${arr[0]}, max = ${arr[arr.length-1]}`);
}

// 10
function arrayInsert(arr, x){
	arr.push(x);
	for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i==j) continue;
            if(arr[j] > arr[i]) [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }
    console.log(arr);
}