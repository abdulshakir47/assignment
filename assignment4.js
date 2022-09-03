// Reverse of an array
// Solution 1
const A = [1,2,3,4,5,6,7];
const reverse = A.reverse()

console.log(reverse);

// Solution 2
console.log(rev([2,3,4,5,6,7]));
function reverse(a){
    const s = a.reverse();
    console.log(s);
}

reverse([1,2,3,4,5])


// Solution 3
function reverse(n) {
    var rev = [];
    while (n.length) {
      rev.push(n.pop());
    }
  
    return rev;
  }
  
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));