import ButtonGhost from './index'
import {mount} from 'enzyme'
describe('ButtonGhost',()=>{
    let props;
    beforeEach(()=>{
        props={
        onClick:()=>{},
        isSmall:false,
        children:null
    }
})

it('renders',()=>{
    const element = mount(<ButtonGhost {...props}/>)
    expect(element.find('button')).to.have.length(1)
})
it('small css class renders',()=>{
    props = {...props,isSmall:true}
     const element = mount(<ButtonGhost {...props}/>)
    expect(element.hasClass('button-ghost-small')).to.equal(true)
})
it('small css class doesnt render',()=>{
    const element = mount(<ButtonGhost {...props}/>)
    expect(element.hasClass('button-ghost')).to.equal(true)
})
})