var search = function(nums, target) {
    if(nums.indexOf(target) > -1){
        return nums.indexOf(target);
    }else{
        return -1;
    }
};

search([-1,0,3,5,9,12], 9);