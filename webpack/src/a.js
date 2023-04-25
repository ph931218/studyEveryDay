import {double, testB} from './b'

testB();
// console.log('a', double(1))
export const rel = {
    val: double(1)
}
console.log(rel)
// import('./b.js').then(({
//     testB
// }) => {
//     console.log(testB(2))
// })