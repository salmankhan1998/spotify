// https://developer.spotify.com/documentation/
// web-playback-sdk/quick-start/#

// For user login on spotify
export const authEndPoint = "https://accounts.spotify.com/authorize";

// For redirecting user after logged in
const redirectUri = "http://localhost:3000/";

// Client id 
const clientId = "ee036727c9f947af807dd3abf0d123ef";

// Screen will have these functionality
// for user to interact with spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1).split("&")
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
