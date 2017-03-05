import * as actionTypes from '../../constants/actionTypes'
import * as actions from './index'
describe('setSession()',()=>{
    it('returns setsession action type',()=>{
        const session = 'sessionkey'
        const expectedAction= {
            type:actionTypes.SET_SESSION,
            session
        }
        expect(actions.setSession(session)).to.eql(expectedAction)
    })
})