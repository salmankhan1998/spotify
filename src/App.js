import './styles/index.scss'
import Login from './components/Login';
import Player from './components/Player';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDatalayerValue } from './components/DataLayer';

//Creating spotify instance
const spotify =  new SpotifyWebApi(); 

function App() {

  const [{ user, token, playlists }, dispatch] = useDatalayerValue(); 

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      console.log("Token: =>",_token); 

      //Setting access_token to spotify instance(declared at the top)
      // Giving access_token to spotify api for connecting app and spotify
      spotify.setAccessToken(_token);

      //Get user from spotify
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user
        });

        if(user){
          console.log("User is found 👍:>",user);
        }
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });

        if(playlists){
          console.log("User playlists found 👍:>",playlists);
        }
      });

      spotify.getPlaylist('6NNfbQIfHBimdmifqpGaSc').then((response)=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        });
        if(response){
          console.log("Discover Weekly:>",response);
        }
      })
    }
  },[]);

  

  return (
    <div>
      {
        token ? 
        (<Player spotify={spotify}/>)
        :
        (<Login/>)
      }
    </div>
  );
}

export default App;
