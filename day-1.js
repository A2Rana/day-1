
let data = prompt('Enter the data (seprated by a single space)').split(' ');

for( let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
}

function upData(data) {
    let newData = data.sort(function(a, b)
    {
        return a - b; 
    });

    return newData;
}
function downData(data) {
    let newData = data.sort(function(a, b)
    {
        return b - a; 
    });

    return newData;
}

function maxData(data) {
    let maxEle = Math.max(...data);
    return maxEle;
}

function minData(data) {
    let minEle = Math.min(...data);
    return minEle;
}

function sumOfData(data) {
    var sum = data.reduce(function(a, b)
    {
        return a + b;
    });
    return sum;
}
function medianOfData(data) {
    let arr1 = data.sort(function(a, b){
        a-b;
    });
    let mid = Math.floor(arr1.length/2);
    if(arr1.length%2){
        return arr1[mid];
    }
    else{
        return (arr1[mid-1]+arr1[mid])/2;
    }

}
function meanOfData(data) {
    let sum = sumOfData(data);
    let length = data.length;
    let mean = (sum / length).toFixed(3);
   
    return mean;
}

function stdev(data) {

    const mean = meanOfData(data);
    let sumOfSquares = 0;
    for(let i=0;i<data.length;i++){
        sumOfSquares += (data[i]-mean)*(data[i]-mean);
    }
    const val = sumOfSquares/data.length;
    return Math.sqrt(val).toFixed(3);
}

let newData = upData(data); 
console.log(newData);

newData = downData(data);
console.log(newData);

newData = maxData(data);
console.log(newData);

newData = minData(data);
console.log(newData);

newData = sumOfData(data);
console.log(newData);

newData = medianOfData(data);
console.log(newData);

newData = meanOfData(data);
console.log(newData);

newData = stdev(data);
console.log(newData);