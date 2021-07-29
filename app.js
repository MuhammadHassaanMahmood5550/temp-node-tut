//--npm = allow us to
// 1. write our own code 
// 2. use someone else code
// 3. share our own solution with others.

//--in npm website -> package = dependency = module

//--package.json = store important info about project/package.
//--npm init (step by step, enter to skip)
//--npm init -y (everything default).

//--bcz we had installed dependency using npm i loadash
const _ = require('loadash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);