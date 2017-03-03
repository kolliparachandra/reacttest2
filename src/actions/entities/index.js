import * as actionTypes from '../../constants/actionTypes'
export const mergeEntities=(entities)=>{
   return {
       type:actionTypes.MERGE_ENTITIES,
       entities
   }
}
export const syncEntities=(entity,key)=>{
    return{
        type:actionTypes.SYNC_ENTITIES,
        entity,
        key
    }
}