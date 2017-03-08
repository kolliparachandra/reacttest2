import * as actionTypes from '../../constants/actionTypes'
const browse=(state={},action)=>{
    switch(action.type){
        case actionTypes.MERGE_GENRE_ACTIVITIES:{
            const oldList = state[action.genre] ||[];
            const newList = [...oldList,...action.activities]
        return{
            ...state,
            [action.genre]:newList
        }
    }
    default:
    return state;
    }
}

export default browse;