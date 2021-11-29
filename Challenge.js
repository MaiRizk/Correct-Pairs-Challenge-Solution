function getPairs(arr) {
  let correctPairs = []
  for (let i = 1; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] == arr[0]) {
        correctPairs.push([arr[i], arr[j]])
      }
    }
  }
  return correctPairs.join(" ");
}
