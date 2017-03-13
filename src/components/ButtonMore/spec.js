import ButtonMore from './index'
import {mount} from 'enzyme'
describe('ButtonMore',()=>{
     let props;
     beforeEach(()=>{
        props={
            nextHref:'/foo',
            onClick:()=>{},
            isLoading:false,
            isHidden:false
        }
    })
    it('renders',()=>{
        const element=mount(<ButtonMore {...props} />)
        expect(element.find('ButtonGhost')).to.have.length(1)
    })
    it('doesnt render when hidden is true',()=>{
        props ={...props,isHidden:true}
        const element=mount(<ButtonMore {...props} />)
        expect(element.find('ButtonGhost')).to.have.length(0)
    })
    it('doesnt render when there is no next link',()=>{
        props ={...props,nextHref:null}
        const element=mount(<ButtonMore {...props} />)
        expect(element.find('ButtonGhost')).to.have.length(0)
    })
    it('renders LoadingSpinner when isLoading set to true',()=>{
        props ={...props,isLoading:true}
        const element=mount(<ButtonMore {...props} />)
        expect(element.find('LoadingSpinner')).to.have.length(1)
        expect(element.find('ButtonGhost')).to.have.length(0)
        
    })
    })