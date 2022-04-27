import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDatalayerValue } from './DataLayer';

const Sidebar = () =>{

    const [{playlists}, dispatch] = useDatalayerValue();

    return(
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify icon" />    
            </div>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong className='sidebar__playlist-title'>Playlist</strong>
            <hr className='sidebar__border'/>
            
            {playlists?.items?.map(playlist =>{
                <SidebarOption title={playlist.name}/>
            })}
        
        </div>
    );
};

export default Sidebar;