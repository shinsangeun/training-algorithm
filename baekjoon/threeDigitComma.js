function threeDigitComma(N) {
    let data = N.toString();

    console.log("test:", N.toLocaleString())

    let array = [];
    for(let i = 0; i < data.length; i++){
        // console.log(data[i]);
        if(i % 3 === 0 && i !== 0){
            array.push(',', data[i]);
        }else{
            array.push(data[i]);
        }
        console.log("array:", array.join(""));
    }
    return array;
}

threeDigitComma(123456);