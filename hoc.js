const _=require('lodash')
//
const mult=(a,b)=>a*b;
 const divide=(a,b)=>a/b;
// const double=_.partial(mult,2)
// console.log(double(21))
// const half=_.partial(divide,_,2)
// console.log(half(21))

/**********************************/

const curriedDivide=_.curry(divide);
console.log(curriedDivide(10,2));
console.log(curriedDivide(10)(2))

const notFlatArray=[1,2,3,[4,5]]
const sumFlat=_.flow([_.concat,_.flattenDeep,_.sum]);
console.log(sumFlat(notFlatArray))
console.log(1)
console.log(1)
console.log(1)
