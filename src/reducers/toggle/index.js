import * as actionTypes from '../../constants/actionTypes'
const toggle=(state={},action)=>{
    switch(action.type){
        case actionTypes.SET_TOGGLED:{
            const toggleObject={};
          toggleObject[action.toggleType] = !state[action.toggleType]
        return{
            ...state,...toggleObject
        }
        }
        case actionTypes.RESET_TOGGLED:{
          const toggleObject={};
          toggleObject[action.toggleType] = false;
        return{
                ...state,...toggleObject
            }
        }
        default:
        return state;
    }
}
export default toggle;