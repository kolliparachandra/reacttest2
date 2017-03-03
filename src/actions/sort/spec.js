import * as actionTypes from '../../constants/actionTypes'
import * as sortTypes from '../../constants/sortTypes'
import * as actions from './index'
describe('sortStream()',()=>{
    it('returns sort action type',()=>{
        const sortType = sortTypes.SORT_FAVORITES
        const expectedAction= {
            type:actionTypes.SORT_STREAM,
            sortType
        }
        expect(actions.sortStream(sortType)).to.eql(expectedAction)
    })
})