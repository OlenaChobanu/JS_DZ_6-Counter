// Counter

function Counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

let counter = Counter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());