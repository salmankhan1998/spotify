import React from 'react'

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:[],
    //Remove this token after finish dev
    // token: 'BQDYUlUv7xsodaTqidGHXwxCCqoPxcjgkWjosOFt5a15yjVRpK_4KU32DQbOFUamBOR5bt24GGWKhu1AURiP5CaJ0n50q6HwLok2kysrX_dWxUUtQb8kObWNGyF2zuDJV6Teg4eZBPV5lsD1PkC5CDO5BV1fA3d4-89nVYe1sjL9m2EKZDEy'
}

export const reducer =(state, action) =>{

    console.log("Action => ",action);

    //Action => type, payload(data)
    switch(action.type){
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{ 
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: 
            return state;
    };
    
    return(
        <div></div>
    )
};

export default reducer;