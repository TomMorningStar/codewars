function sumIntervals(intervals) {


  if(Array.isArray(intervals[0])) {
    return [...new Set(intervals.reduce((acc, cur) => {
      const curDecr = Math.abs(cur[1]) - cur[0]
  
      const newArr = new Array(curDecr).fill().map((el, i) => {
        return cur[0] + i
      })
  
       acc.push(...newArr)
  
       return acc
    }, []))].length
  }


  const newArr = new Array(Math.abs(intervals[1] - intervals[0])).fill().map((el, i) => {
    return intervals[0] + i
  })

  return newArr.length 



}

const test1 = [[1,5],[1,5]];
const test2 = [[1,4],[7, 10],[3, 5]];
// assert.strictEqual(sumIntervals(test1), 4);
// assert.strictEqual(sumIntervals(test2), 7);

// 2,3,4,8,9,

console.log(sumIntervals([[
  -10, 10
]])); 
// => 100000030
// -2,-1,0,1,2,3
