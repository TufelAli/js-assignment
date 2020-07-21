function isPositive(num) {
    return num >= 0;
  }
  var num;
  while (true) {
    num = prompt("Enter a number");
    if (num === null) {
      alert("No number entered. Try again.");
      continue; 
    }
    num = parseInt(num, 10);
    if (isNaN(num)) {
      alert("Invalid number entered. Try again.");
      continue;
    }
    break;
  }
  alert(isPositive(num));

  var inputArray = [];
  var size = 5;
  
  for(var i=0; i<size; i++) {
      inputArray[i] = prompt('Enter Element ' + (i+1));
  }
    console.log(inputArray);

    function countBy(arr, fn) {
        let oddCount = 0
        let evenCount = 0
        return arr.reduce(function(acc, nums) {
          // console.log(nums);
          console.log(nums, fn(nums))
          if (fn(nums) === "even") {
            evenCount++;
            acc['even'] = evenCount;
          } else {
            oddCount++;
            acc['odd'] = oddCount;
          }
          return acc
        }, {}, 0)
      
      }
      
      function evenOdd(n) {
        if (n % 2 === 0) return "even";
        else return "odd";
      }
      var nums = [1, 2, 3, 4, 5];
      console.log(countBy(nums, evenOdd));