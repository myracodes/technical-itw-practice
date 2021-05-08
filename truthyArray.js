// Create a function that filters all the falsy values from an array

const arr = ['hello', undefined, 'tomato', null, 0, 15, true, false];

function removeFalsy (arr) {
  let truthyArray = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i])
    }
  };
  return truthyArray;
  }

console.log(removeFalsy(arr));
 


// 1 iterate on each element
// 2 if element is truthy (not falsy) add it to a new array
// 3 return the new array


// --------------------------------------------------------------

// Remove the comments line 4 and 24.
// What will be logged to the console after the code is finished executing?

//line 4

function first () {
    const color = 'Orange';
    console.log(color);
  }
  
  function second () {
    const color = 'Red';
    console.log(color);
  }
  
  console.log(color);
  
  const color = 'Green';
  first();
  second();
  
  console.log(color);
  
  
  // line 24