import reduce from 'lodash/fp/reduce'
const noCapReduce=reduce.convert({ 'cap': false })
const red = noCapReduce((result,value,key)=>{
    ((result[value])||(result[value]=[])).push(key)
    return result;
},{})
console.log(red({ jey11: 1, jey23: 3, jey223: 3 }))
