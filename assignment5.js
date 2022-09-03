
// Remove Duplicates 

var removeDuplicates = function (nums) {
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== nums[i+1]){
            nums[j++] = nums[i];
        }
    };
    return j;
};
const nums = [1,2,3,4,4,5,6,7,8,8,9,9,10,10];

const n = removeDuplicates(nums)
for (let l = 0; l < n; l++) {
    const element = nums[l];
    console.log(element);
}


// Logic 2 Using filters
var removeDuplicates = function(nums) {
    return nums.filter((e,i)=> nums.indexOf(e) === i)
  };

console.log(removeDuplicates([3,4,5,6,7,7,8,9,9]));











