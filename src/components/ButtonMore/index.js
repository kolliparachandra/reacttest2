import React from 'react'
import withLoadingSpinner from '../withLoadingSpinner'
import ButtonGhost from '../ButtonGhost'
const ButtonMore=({onClick,nextHref,isHidden})=>{
    return(
        <div className='button-more'>
            {
                !nextHref || isHidden?null:<ButtonGhost onClick={onClick}>More</ButtonGhost>
            }
            </div>
    )
}
export default withLoadingSpinner(ButtonMore);