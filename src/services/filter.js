import every from 'lodash/fp/every'
import some from 'lodash/fp/some'

export const getOrCombined=(filters)=>(obj)=>some((fn)=>fn(obj),filters)

export const getAndCombined=(filters)=>(obj)=>every((fn)=>fn(obj),filters)