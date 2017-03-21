import React from 'react'
import FilterDuration from '../FilterDuration'
import FilterName from '../FilterName'
import Sort from '../Sort'
const StreamInteractions = () => {
    return (
        <div className='stream-interactions'>
            <div className='stream-interactions-item'>
                <FilterDuration />
            </div>
            <div className='stream-interactions-item'>
                <Sort />
            </div>
            <div className='stream-interactions-item'>
                <FilterName />
            </div>
        </div>
    )
}

export default StreamInteractions;