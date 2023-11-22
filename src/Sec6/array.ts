export {}

// 推奨
let numbers:number[] = [1,2,3,4,5];

// interface Array<T>で定義した場合
let numbers2:Array<number> = [1,2,3,4,5];

// 2次元配列
let numberArray:number[][] = [
  [1,2],
  [3,4]
]

// Mix Type
let mixArray:(string | number | boolean)[] = [1, false, 'Japan'];
