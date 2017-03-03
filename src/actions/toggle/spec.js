import * as actionTypes from '../../constants/actionTypes'
import * as toggleTypes from '../../constants/toggleTypes'
import * as actions from './index'
describe('setToggle()',()=>{
    it('return set toggle action',()=>{
        const toggleType = toggleTypes.FOLLOWINGS
        const expectedAction={
            type:actionTypes.SET_TOGGLED,
            toggleType
        }
        expect(actions.setToggle(toggleType)).to.eql(expectedAction)
    })
})
describe('resetToggle()',()=>{
    it('return reset toggle action',()=>{
        const toggleType=toggleTypes.FAVORITES
        const expectedAction={
            type:actionTypes.RESET_TOGGLED,
            toggleType
        }
        expect(actions.resetToggle(toggleType)).to.eql(expectedAction)
    })
})