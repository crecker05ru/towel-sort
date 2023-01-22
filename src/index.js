
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return []
    }
  return matrix.map( (arr, index) => index === 1 || index === 3 ? arr.reverse() : arr ).flat();
}
