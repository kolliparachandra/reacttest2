import * as actionTypes from '../../constants/actionTypes'
import * as actions from './index'
describe('setRequestInProcess()',()=>{
    it('sets request status as in process',()=>{
        const requestType = 'type'
        const inProcess = true
        const expectedAction={
            type:actionTypes.SET_REQUEST_IN_PROCESS,
            inProcess,
            requestType
        }

        expect(actions.setRequestInProcess(inProcess,requestType)).to.eql(expectedAction)
    })
})