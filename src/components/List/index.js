import React from 'react'
import map from '../../services/map'
import classNames from 'classnames'
import { TrackPreviewContainer } from '../Track'
import { UserPreviewContainer } from '../User'
import ButtonMore from '../ButtonMore'
import ButtonInline from '../ButtonInline'
const Chevron = ({ ids, isExpanded }) => {
    const chevronClass = classNames(
        'fa',
        {
            'fa-chevron-up': isExpanded,
            'fa-chevron-down': !isExpanded
        }
    )
    return ids.length > 4 ? <i className={chevronClass} /> : null
}

const SpecificItemTrack = ({ entities, trackId }) => {
    return (
        <li>
            <TrackPreviewContainer activity={entities[trackId]} />
        </li>
    )
}

const SpecificItemUser = ({ entities, userId }) => {
    return (
        <li>
            <UserPreviewContainer user={entities[userId]} />
        </li>
    )
}

const SpecificList = ({ ids, kind, entities }) => {
    if (kind === 'USER') {
        return (
            <div className='list-content'>
                <ul>
                    {map((id, key) => {
                        const userProps = { userId: id, entities }
                        return <SpecificItemUser key={key} {...userProps} />
                    }, ids)

                    }
                </ul>
            </div>
        )

    }
    if (kind === 'TRACK') {
        return (
            <div className='list-content'>
                <ul>
                    {map((id, key) => {
                        const trackProps = { trackId: id, entities }
                        return <SpecificItemTrack key={key} {...trackProps} />
                    }, ids)}
                </ul>
            </div>
        )
    }
}

const List = ({ ids, isExpanded, title, kind, requestInProcess, entities, onToggleMore, nextHref, onFetchMore }) => {
    const listClass = classNames(
        {
            'more-visible': isExpanded
        }
    )
    return (
        <div className='list'>
            <h2>
                <ButtonInline onClick={onToggleMore}>
                    {title} <Chevron ids={ids} isExpanded={isExpanded} />
                </ButtonInline>
            </h2>
            <div className={listClass}>
                <SpecificList ids={ids} kind={kind} entities={entities} />
                <ButtonMore nextHref={nextHref} onClick={onFetchMore} isLoading={requestInProcess || !ids} isHidden={!isExpanded} />
            </div>
        </div>
    )
}

List.propTypes={
    ids:React.PropTypes.array,
    isExpanded:React.PropTypes.bool,
    title:React.PropTypes.string,
    kind:React.PropTypes.string,
    requestInProcess:React.PropTypes.bool,
    entities:React.PropTypes.object,
    nextHref:React.PropTypes.string,
    onToggleMore:React.PropTypes.func,
    onFetchMore:React.PropTypes.func
}

export default List;
export {SpecificList,Chevron}