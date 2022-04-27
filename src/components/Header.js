import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDatalayerValue } from './DataLayer';

const Header = ({spotify}) =>{

    const [{user}, dispatch] = useDatalayerValue();

    return(
        <div className="header">
            <div className="header__left">
                <SearchIcon 
                    className="header__left--search"
                />
                <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder='Search' 
                />
            </div>
            <div className="header__right">
                { user ? 
                    <img
                        src={user ? user?.images[0]?.url : ''}
                        className="header__right--avatar"
                    />
                    :
                    <AccountCircleIcon
                        className="header__right--avatar"
                    />
                }
                
                <h5>
                    {user ? user?.display_name : 'Username'}
                </h5>
                <ArrowDropDownIcon 
                    className="header__right--arrow"
                />
            </div>
        </div>
    );
};

export default Header;