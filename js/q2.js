function solution(num_list, n) {
    const length = num_list.length;
    const divide = Math.floor(length / n) + (Math.floor( length % n ) > 0 ? 1 : 0);
    const newArray = [];
    for (let i = 0; i < divide; i++) {
      newArray.push(num_list.splice(0, n)); 
    }
    return newArray;
  }
  