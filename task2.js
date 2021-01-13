let submitEl = document.querySelector(".submit");
let data = [];

submitEl.addEventListener('click', function(){
    data = document.querySelector(".input").value.split(' ');

    if(data.length === 1 && data[0] === "") {
        alert('No DATA! No Analysis!');
    }

    for(let i = 0; i < data.length; i++) {
         data[i] = Number(data[i].trim());
    }
});

// Function to sort the data in ascending order
function upData(data) {
    let newData = data.sort(function(a, b)
    {
        return a - b; 
    });

    return newData;
}

// Function to sort the data in descending order
function downData(data) {
    let newData = data.sort(function(a, b)
    {
        return b - a; 
    });

    return newData;
}

// Function to find the max valued data
function maxData(data) {
    let maxEle = Math.max(...data);
    return maxEle;
}

// Function to find the min valued data
function minData(data) {
    let minEle = Math.min(...data);

    return minEle;
}

// Function to get the sum of the data
function sumOfData(data) {
    var sum = data.reduce(function(a, b)
    {
        return a + b;
    });

    return sum;
}

// Function to find the median of the data
function medianOfData(data) {
    let arr1 = data.sort(function(a, b){
        a - b;
    });
    let mid = Math.floor(arr1.length/2);

    if(arr1.length % 2){
        return arr1[mid];
    }
    else { 
        return (arr1[mid - 1] + arr1[mid])/2;
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

    for(let i = 0; i < data.length; i++){
        sumOfSquares += (data[i] - mean)*(data[i] - mean);
    }
    const val = sumOfSquares / data.length;

    return Math.sqrt(val).toFixed(3);
}

var buttonEl = document.getElementsByTagName("button");

var divEl = document.getElementById("result");

for(let i = 0; i < buttonEl.length; i++)
{
    buttonEl[i].addEventListener("click", function() {
        var op = buttonEl[i].name;

        if(op === "up") {
            divEl.innerHTML = upData(data); 
        }
        else if(op === "down") {
            divEl.innerHTML = downData(data); 
        }
        else if(op === "max") {
            divEl.innerHTML = maxData(data); 
        }
        else if(op === "min") {
            divEl.innerHTML = minData(data); 
        }
        else if(op === "sum") {
            divEl.innerHTML = sumOfData(data); 
        }
        else if(op === "mean") {
            divEl.innerHTML = meanOfData(data); 
        }
        else if(op === "median") {
            divEl.innerHTML = medianOfData(data); 
        }
        else if(op === "std") {
            divEl.innerHTML = stdev(data); 
        }
    } );
}
