import React from 'react';

import Header from './Header';
import SongRow from './SongRow';

import { useDatalayerValue } from './DataLayer';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Body = ({spotify}) =>{

    const [{discover_weekly}, dispatch] = useDatalayerValue();

    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__infoBox">
                <img src={discover_weekly?.images[0]?.url} alt="playlist icon" />

                <div className="body__infoBox--text">
                    <strong>PLAYLIST</strong>
                    <h2>
                        {discover_weekly?.name}
                    </h2>
                    <p>
                        {discover_weekly?.description}
                    </p>    
                </div>
            </div>
            <div className="body__songs">
                <div className="body__songs--icons">
                    <PlayCircleIcon className='body__songs--icons--play'/>
                    <FavoriteIcon/>
                    <MoreHorizIcon/>
                </div>

                <div className='body__songs--songBox'>
                    {discover_weekly?.tracks.items.map((item) =>{
                        return <SongRow data={item}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Body;