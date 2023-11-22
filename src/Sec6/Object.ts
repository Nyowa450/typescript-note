export {}

// object type
let test:{name: string;} = {name: 'hogemaru'}

// Type Alias

type Mojidayo = string;
const hoge:Mojidayo = 'hoge';

type SampleObj = {
  name: string;
  age: number;
  isMale: boolean;
}

const sampleObj:SampleObj = {
  name: 'hogemaru',
  age: 28,
  isMale: true
}
console.log(sampleObj);

type Sample2 = typeof sampleObj
