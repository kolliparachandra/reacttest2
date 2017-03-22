import React from 'react'
import StreamActivities from '../StreamActivities'
import FollowersList from '../FollowersList'
import FollowingsList from '../FollowingList'
import FavoritesList from '../FavoritesList'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-main'>
                <StreamActivities />
            </div>
            <div className='dashboard-side'>
                <FollowingsList />
                <FollowersList />
                <FavoritesList />
            </div>
        </div>
    )
}
export default Dashboard;