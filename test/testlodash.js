import isEqual from 'lodash/fp/isEqual'
import get from 'lodash/fp/get'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import dropRightWhile from 'lodash/fp/dropRightWhile'
import dropWhile from 'lodash/fp/dropWhile'
import every from 'lodash/fp/every'
import filter from 'lodash/fp/filter'
import find from 'lodash/fp/find'
import findIndex from 'lodash/fp/findIndex'
import findKey from 'lodash/fp/findKey'
import flatMap from 'lodash/fp/flatMap'
import flatMapDeep from 'lodash/fp/flatMapDeep'
import flatMapDepth from 'lodash/flatMapDepth'
import forEach from 'lodash/fp/foreach'
import forEachRight from 'lodash/fp/forEachRight'
import forIn from 'lodash/fp/forIn'
import forInRight from 'lodash/fp/forInRight'
import forOwn from 'lodash/fp/forOwn'
import forOwnRight from 'lodash/fp/forOwnRight'
import mapKeys from 'lodash/fp/mapKeys'
import mapValues from 'lodash/fp/mapValues'
import partition from 'lodash/fp/partition'
import reject from 'lodash/fp/reject'
import remove from 'lodash/fp/remove'
import some from 'lodash/fp/some'
import takeRightWhile from 'lodash/fp/takeRightWhile'
import takeWhile from 'lodash/fp/takeWhile'
import times from 'lodash/fp/times'
const response= {
    status:400
}
const users = [
   { 'user': 'pebbles', 'active': true },
  { 'user': 'barney',  'active': true },
   { 'user': 'fred',    'active': false }
  ];

  var usersDict = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
const usersArray = [
   [{ 'user': 'fred',    'active': false },
   [{ 'user': 'freda',    'active': false }]]
  ];
const isSuccess= flow(get('status'),isEqual(200));
console.log(isSuccess(response));
console.log(map(parseInt,['6', '8', '10']));
//iteratee first data last
console.log(dropRightWhile((val)=>val.active===false,users))
console.log(dropWhile((val)=>val.active===true,users))
console.log(every((val)=>val.active===true || val.active===false,users))
console.log(filter(val=>val.active===true,users))
console.log(find(val=>val.active===true,users))
console.log(findIndex(val=>val.active===false,users))
console.log(findKey(val=>val.active===true,usersDict))
console.log(flatMap(val=>[val,val],usersArray))
console.log(flatMapDeep(val=>[val,val],usersArray))
console.log(flatMapDepth(usersArray,val=>[val,val],3))
forEach(val=>console.log(val.user),users)
forEachRight(val=>console.log(val.user),users)
function foo(){ this.memberKey =1};
foo.prototype.onProto = 3;
forIn((val)=>console.log(`forIn ${val}`),new foo)
forInRight((val)=>console.log(`forInRight ${val}`),new foo)
forOwn((val)=>console.log(`forOwn ${val}`),new foo)
forOwnRight((val)=>console.log(`forOwnRight = ${val}`),new foo)
const foo1=()=>{};
foo1.prototype.onlyProtoArrow =1;
forIn(new foo1,(val)=>console.log(`${val}`))
forInRight((val)=>console.log(`forInRight ${val}`,new foo1))
forOwn((val)=>console.log(`forOwn arrow ${val}`),new foo1)//no values
forOwnRight((val)=>console.log(`forOwnRight arrow ${val}`),new foo1)//no values

mapKeys((val)=>console.log(`mapKeys ${val}`),users)
mapKeys((val)=>console.log(`mapKeys ${val}`),usersDict)

mapValues((val)=>console.log(`mapValues ${val.user}`),users)
mapValues((val)=>console.log(`mapValues ${val.age}`),usersDict)

console.log(partition(val=>val.active===true,users))

console.log(reject(val=>val.active === false,users))

const newusers = users;
console.log(remove(val=>val.active === true,users))

console.log(some(val=>val.active === true,users))

console.log(takeRightWhile(val=>val.active === false,users))

console.log(takeWhile(val=>val.active === true,users))
console.log(times(Number,4))