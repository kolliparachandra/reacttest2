import * as actionTypes from '../../constants/actionTypes'
import * as toggleTypes from '../../constants/toggleTypes'
export const setToggle=(toggleType)=>{
    return{
        type:actionTypes.SET_TOGGLED,
        toggleType
    }
}
export const resetToggle=(toggleType)=>{
    return{
        type:actionTypes.RESET_TOGGLED,
        toggleType
    }
}