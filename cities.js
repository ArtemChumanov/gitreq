const _=require('lodash');
const citises=require("./data.json");

// const output=_(citises)
//     .filter(c=>c.population>451114444)
//     .countBy(c=>c.country)
//     .toPairs()
//     .map(c=>_.zipObject(['country','city'],c))
//     .orderBy(c=>c.cities,"desc")
//     .take(5)
//     .value()
// console.log(output)

const greaterThan=_.curryRight(_.gte)
const populationGreaterThen=num=>_.conforms({population:greaterThan(num)})
const zip=_.curry(_.zipObject)
const out=_(citises)
    .filter(populationGreaterThen(500000))
    .countBy('country')
    .toPairs()
    .map(zip(['country','city']))
    .orderBy("city","desc")
    .take(6)
    .value()
console.log(out)
console.log(1)

