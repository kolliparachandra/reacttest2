import React from 'react'
import classNames from 'classnames'
import {connect} from react-redux
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import * as toggleTypes from '../../constants/toggleTypes'
import Slider from 'react-rangeslider'
import ButtonInLine from '../../components/ButtonInline'

const VolumeSlider = ({volume,onChangeVolume})=><Slider min={0} max={100} value={volume} orientation='vertical' onChange={onChangeVolume} />

const Volume=({toggle,volume,onChangeVolume})=>{const volumeClass=classNames('volume',{'volume-visible':toggle[toggleTypes.VOLUME]})
    const isMuted= !volume;
    const onMute=isMuted?onChangeVolume(70):onChangeVolume(0)
    const muteClass=classNames('fa',{'fa-volume-up':!isMuted,'fa-volume-off':isMuted})

    return(
        <div className={volumeClass}>
            <div>
                <h2 className='volume-number'>{volume}</h2>
                <VolumeSlider volume={volume} onChangeVolume={onChangeVolume}/>
                <div className='volume-muter'>
                    <ButtonInLine onClick={onMute}>
                        <i className={muteClass} />
                        </ButtonInLine>
                </div>
                </div>
                </div>

    )
}

const mapStateToProps=(state)=>{
    return{
        toggle:state.toggle,
        volume:state.player.volume
    }
}