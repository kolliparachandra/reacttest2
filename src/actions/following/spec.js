import * as actionTypes from '../../constants/actionTypes'
import * as actions from './index'
describe('removeFromFollowings()',()=>{
    it('remove from followings action',()=>{
        const user={id:10}
        const expectedAction={
            type:actionTypes.REMOVE_FROM_FOLLOWINGS,
            userId:user.id
        }

        expect(actions.removeFromFollowings(user.id)).to.eql(expectedAction)
    })
})