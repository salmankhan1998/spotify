import React from 'react'

const SongRow = ({data}) => {
    console.log("tracks",data)
    return ( 
        <div className='songs'>
            <img src={data.track.album.images[2].url} alt="Album Icon" className='songs__img' />

            <div className='songs__info'>
                <h2>
                    {data.track.name}
                </h2>
                <p>
                    {data.track.artists.map(artist =>artist.name).join(', ')}
                    {data.track.album.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;