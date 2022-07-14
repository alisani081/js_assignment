var addTwoNumbersToGetTarget = function(nums, target) {
    // Loop through the nums-array for first sum number
for(var i=0; i < nums.length; i++){
            // Loop through the nums-array to get next index (x = i+1) for second sum number.
    for(var x = i + 1; x < nums.length; x++){
            // Check if first element and second element === target. Used === for coercision to check type
        if(nums[i] + nums[x] === target){
            // Return the two sum elements
            return [nums[i], nums[x]];
        } 
    }
}

// Returns "undefined" if conditions not made.
}