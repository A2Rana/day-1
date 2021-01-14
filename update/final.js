var upValue = null;
var downValue = null;
var maxValue = null;
var minValue = null;
var sumValue = null;
var meanValue = null;
var stdevValue = null;
var medianValue = null;

function up(arr) {
  return arr.sort((a, b) => a - b);
}

function down(arr) {
  return arr.sort((a, b) => b - a);
}
function max(arr) {
  return arr.reduce((a, b) => Math.max(a, b));
}
function min(arr) {
  return arr.reduce((a, b) => Math.min(a, b));
}
function sum(arr) {
  let mySum = arr.reduce((a, b) => (a = a + b));

  return mySum;
}
function mean(arr) {
  var p = arr.reduce((a, b) => (a = a + b));
  var l = arr.length;
  return (p / l).toFixed(3);
}
function median(arr) {
  var sortedArr = upValue ? upValue : up(arr);
  mid = Math.floor(arr.length / 2);
  var l = arr.length;
  if (l % 2 == 0) {
    return Math.ceil(sortedArr[mid] + sortedArr[mid - 1] / 2).toFixed(3);
  } else {
    return sortedArr[mid - 1];
  }
}
// square root of ( sum of (square of (difference of each element and mean)) )
function stdev(arr) {
  var t = 0;

  var m = meanValue ? meanValue : mean(arr);
  for (let i = 0; i < arr.length; i++) {
    let cal = Math.pow(arr[i] - m, 2);
    t += cal;
  }
  return Math.sqrt(t / arr.length).toFixed(3);
}

try {
  let op;
  let data = [];
  console.log(op);
  let submitBtn = document.querySelector(".submitbtn");
  let resultEl = document.querySelector(".result");

  submitBtn.addEventListener("click", function () {
    let inputField = document.querySelector(".myInput");
    let operationName = document.querySelector(".operation");
    data = inputField.value.split(" ");

    for (let i = 0; i < data.length; i++) {
      data[i] = Number(data[i]);
    }
    op = operationName.value;

    performOperation();
  });

  function performOperation() {
    if (data.some(isNaN)) {
      resultEl.innerHTML = " :( Inputs must contain numbers! ";
    } else {
      switch (op.toLowerCase()) {
        case "up": {
          if (!upValue) {
            upValue = up(data);
          }
          resultEl.innerHTML = "Result : " + upValue;
          break;
        }
        case "down": {
          if (!downValue) {
            downValue = down(data);
          }
          resultEl.innerHTML = "Result: " + downValue;
          break;
        }
        case "max": {
          if (!maxValue) {
            maxValue = max(data);
          }
          resultEl.innerHTML = "Result: " + maxValue;
          break;
        }
        case "sum": {
          if (!sumValue) {
            sumValue = sum(data);
          }
          resultEl.innerHTML = "Result: " + sumValue;
          break;
        }
        case "min": {
          if (!minValue) {
            minValue = min(data);
          }
          resultEl.innerHTML = "Result: " + minValue;
          break;
        }

        case "mean": {
          if (!meanValue) {
            meanValue = mean(data);
          }
          resultEl.innerHTML = "Result: " + meanValue;
          break;
        }
        case "median": {
          if (!medianValue) {
            medianValue = median(data);
          }
          resultEl.innerHTML = "Result: " + medianValue;
          break;
        }
        case "std": {
          if (!stdevValue) {
            stdevValue = stdev(data);
          }
          resultEl.innerHTML = "Result: " + stdevValue;
          break;
        }
        default:
          console.log("Please try the correct operation");
      }
    }
  }
} catch (e) {
  console.error(e);
}
