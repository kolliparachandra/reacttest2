import React from 'react'
import map from '../../services/map'
import classNames from 'classnames'
import ButtonInline from '../ButtonInline'
const Action=({actionItem})=>{
    return(
        <span className='action-item'>
            <ButtonInline onClick={actionItem.fn}>
                <i className={actionItem.className} />
                </ButtonInline>
                </span>
    )
}
const Actions=({configuration,isVisible})=>{
    const actionClass=classNames(
        'action',
        {
            'action-visible':isVisible
        }
    )
    return(
        <div className={actionClass}>
            {map((actionItem,key)=><Action key={key} actionItem={actionItem} />,configuration)}
        </div>
    )

}
Actions.propTypes={
    configuration:React.PropTypes.array,
    isVisible:React.PropTypes.bool
}

export default Actions
export {Action}