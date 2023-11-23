export {};

// normal function
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

// anonymous function
let bmiAno: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

// arrow function
let bmi3 = (height: number, weight: number): number => {
  return weight / (height * height);
}


