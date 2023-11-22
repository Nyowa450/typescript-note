// exportでモジュール化しないと、グローバル空間の変数とかぶった場合にErrorが出る
export {}

let isFinished: boolean = true
console.log({ isFinished })
