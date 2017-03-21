import React from 'react'
import { DEFAULT_GENRE } from '../../constants/genre'
import Header from '../Header'
import Player from '../Player'
import Playlist from '../Playlist'
import Volume from '../Volume'

export default class App extends React.Component {
    render() {
        const { location, children } = this.props
        const { pathname, query } = location
        const genre = query.genre || DEFAULT_GENRE
        return (
            <div>
                <Header genre={genre} pathname={pathname} />
                {children}
                <Playlist />
                <Volume />
                <Player />
            </div>
        )
    }
}
