import * as actionTypes from '../../constants/actionTypes'
import * as filterTypes from '../../constants/filterTypes'
import filter from './index'
describe('filter reducer',()=>{
    describe('FILTER_DURATION',()=>{
        it('sets duration filter',()=>{
            const action ={
                type:actionTypes.FILTER_DURATION,
                filterType:filterTypes.FILTER_DURATION_MIX
            }
            const initialState={
                durationFilterType:filterTypes.ALL,
                filterNameQuery:''
            }
             const expectedState={
                durationFilterType:filterTypes.FILTER_DURATION_MIX,
                filterNameQuery:''
            }
            expect(filter(initialState,action)).to.eql(expectedState)
        })
    })
     describe('FILTER_NAME',()=>{
        it('sets filter name',()=>{
            const action ={
                type:actionTypes.FILTER_NAME,
                filterNameQuery:'FILTER_DURATION_MIX'
            }
            const initialState={
                durationFilterType:filterTypes.ALL,
                filterNameQuery:''
            }
             const expectedState={
                durationFilterType:filterTypes.ALL,
                filterNameQuery:'FILTER_DURATION_MIX'
            }
            expect(filter(initialState,action)).to.eql(expectedState)
        })
    })
})