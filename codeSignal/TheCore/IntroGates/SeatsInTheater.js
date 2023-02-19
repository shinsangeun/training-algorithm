function solution(nCols, nRows, col, row){
    let newCol = nCols - col + 1;
    let newRow = nRows - row;

    console.log("newCol * newRow;:", newCol * newRow)
    return newCol * newRow;

}

solution(16, 11, 5, 3);
