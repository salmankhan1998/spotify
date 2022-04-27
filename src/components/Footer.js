import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import songImg from '../images/songImg.jpg'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="footer__left">
                <img src={songImg} alt='songs icon' className='footer__left__img' />
                <div className="footer__left__songInfo">
                    <h4>Hip Hop</h4>
                    <p>Abcd</p>    
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className='footer__center--shuffle footer__center--btn' />
                <SkipPreviousIcon className='footer__center--prev footer__center--btn' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__center--play footer__center--btn' />
                <SkipNextIcon className='footer__center--next footer__center--btn' />
                <RepeatIcon className='footer__center--repeat footer__center--btn' />
            </div>

            <div className="footer__right">
                <div className='footer__right__controls'>
                    <div>
                        <PlaylistPlayIcon/>
                    </div>
                    <div>
                        <VolumeDownIcon/>
                    </div>
                    <div>
                        <Slider className='footer__right__controls--slider'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;