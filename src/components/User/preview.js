import React from 'react'
import find from 'lodash/fp/find'
import InfoList from '../InfoList'
import Actions from '../HoverActions'
import ArtWork from '../ArtWork'
import Permalink from '../Permalink'
const UserPreview=({user,followings,onFollow})=>{
    const {followings_count,followers_count,track_count,avatar_url,username,permalink_url}=user
    const configuration=[
        {
            className:find((following)=>following === user.id,followings)?'fa fa-group is-active':'fa fa-group',
            fn:()=>onFollow(user)
        }
    ]
    const information=[
        {
            className:'fa fa-plus',
            count:followings_count
        },
        {
            className:'fa fa-group',
            count:followers_count
        },
        {
            className:'fa fa-music',
            count:track_count
        }
    ]
    return(
        <div className='item'>
            <div>
                <ArtWork image={avatar_url} title={username} size={40} />
                </div>
                <div className='item-content'>
                    <Permalink link={permalink_url} text={username} />
                    <InfoList information={information} />
                    <Actions configuration={configuration}/>
                    </div>
                    </div>
    )
}
UserPreview.propTypes={
    following:React.PropTypes.array,
    user:React.PropTypes.object,
    onFollow:React.PropTypes.func
}
export default UserPreview;