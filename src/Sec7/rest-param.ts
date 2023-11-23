export {}

const sum:(...values:number[]) => number = (...values:number[]): number =>{
  console.log(values);
  return values.reduce((acc,cur) => acc + cur, 0)
}

sum(1,2,3,4,5,6,7,8,9,10)
