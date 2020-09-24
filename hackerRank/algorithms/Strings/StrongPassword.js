// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let result = 0;
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";


    if(password.length >= 6){
        if(password.indexOf(special_characters) === -1){
            result++;
        }else if(password.indexOf(numbers) === -1){
            result++;
        }else if(password.indexOf(lower_case) === -1){
            result++;
        }else if(password.indexOf(upper_case) === -1){
            result++;
        }
    }else if(password.length < 6){
        result = Math.abs(password.length-6);
        console.log("result:", result);
    }
    console.log("result2:", result);

    return result;
}

minimumNumber(4, "4700");