import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import ButtonInline from '../ButtonInline'
import InputMenu from '../InputMenu'
const FilterName = ({ filterNameQuery, onNameFilter }) => {
    const filterNameIconClass = classNames(
        'stream-interaction-icon',
        {
            'stream-interaction-icon-active': filterNameQuery
        }
    )

    return (
        <div className='stream-interaction'>
            <div className={filterNameIconClass} title={'Search Stream'}>
                <ButtonInline onClick={() => onNameFilter('')}>
                    <i className='fa fa-search' />
                </ButtonInline>
            </div>
            <div className='stream-interaction-content'>
                <InputMenu placeholder="SEARCH..." onChange={(event) => onNameFilter(event.target.value.toLowerCase())} value={filterNameQuery} />
            </div>
        </div>
    )

}

const mapStateToProps=(state,props)=>{
    return{
        filterNameQuery:state.filter.filteNameQuery
    }
}

const mapDispatchToProps=(dispatch)=>{
return{
    onNameFilter:bindActionCreators(actions.filterName,dispatch)
}
}
FilterName.propTypes={
    filterNameQuery:React.PropTypes.string,
    onNameFilter:React.PropTypes.func
}
export default connect(mapStateToProps,mapDispatchToProps)(FilterName)