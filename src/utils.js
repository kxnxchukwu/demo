/**
 * Format milliseconds to time duration
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example 216699 -> '3:36'
 */
 export const formatDuration = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor(((ms % 60000) / 1000));
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  export const tracks = [{
    album_type: "SINGLE", artists:
    [{external_urls:{spotify: "https://open.spotify.com/artist/75VKfyoB…"},
    href:"https://api.spotify.com/v1/artists/75VKfyoBlkmrJFDqo1o2VY",
    id:"75VKfyoBlkmrJFDqo1o2VY",
    name:"Fireboy DML",
    type:"artist",
    uri:"spotify:artist:75VKfyoBlkmrJFDqo1o2VY"},
    {external_urls:{spotify: "https://open.spotify.com/artist/3a1tBryi…"},
    href:"https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
    id:"3a1tBryiczPAZpgoZN9Rzg",
    name:"Asake",
    type:"artist",
    uri:"spotify:artist:3a1tBryiczPAZpgoZN9Rzg"}],
    external_urls:{spotify: "https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke"},
    href:"https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke",
    id:"18ykMJdXdkUldVNESaXDke",
    album: {
        images:
    [{
    height:640,
    url:"https://i.scdn.co/image/ab67616d0000b273f319950b3286ff2ea710571e",
    width:640},
    {
    height:300,
    url:"https://i.scdn.co/image/ab67616d00001e02f319950b3286ff2ea710571e",
    width:300}]
    },
    name:"Bandana",
    release_date:"2022-07-13",
    release_date_precision:"day",
    total_tracks:1,
    type:"album",
    uri:"spotify:album:18ykMJdXdkUldVNESaXDke"
    },
    {
    album_type: "SINGLE", artists:
    [{external_urls:{spotify: "https://open.spotify.com/artist/75VKfyoB…"},
    href:"https://api.spotify.com/v1/artists/75VKfyoBlkmrJFDqo1o2VY",
    id:"75VKfyoBlkmrJFDqo1o2VY",
    name:"Fireboy DML",
    type:"artist",
    uri:"spotify:artist:75VKfyoBlkmrJFDqo1o2VY"},
    {external_urls:{spotify: "https://open.spotify.com/artist/3a1tBryi…"},
    href:"https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
    id:"3a1tBryiczPAZpgoZN9Rzg",
    name:"Asake",
    type:"artist",
    uri:"spotify:artist:3a1tBryiczPAZpgoZN9Rzg"}],
    external_urls:{spotify: "https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke"},
    href:"https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke",
    id:"18ykMJdXdkUldVNESaXdeswDke",
    album: {
        images:
    [{
    height:640,
    url:"https://i.scdn.co/image/ab67616d0000b273f319950b3286ff2ea710571e",
    width:640},
    {
    height:300,
    url:"https://i.scdn.co/image/ab67616d00001e02f319950b3286ff2ea710571e",
    width:300}]
    },
    name:"Bandana",
    release_date:"2022-07-13",
    release_date_precision:"day",
    total_tracks:1,
    type:"album",
    uri:"spotify:album:18ykMJdXdkUldVNESaXDke"
    },
    {
        album_type: "SINGLE", artists:
        [{external_urls:{spotify: "https://open.spotify.com/artist/75VKfyoB…"},
        href:"https://api.spotify.com/v1/artists/75VKfyoBlkmrJFDqo1o2VY",
        id:"75VKfyoBlkmrJFDqo1o2VY",
        name:"Fireboy DML",
        type:"artist",
        uri:"spotify:artist:75VKfyoBlkmrJFDqo1o2VY"},
        {external_urls:{spotify: "https://open.spotify.com/artist/3a1tBryi…"},
        href:"https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
        id:"3a1tBryiczPAZpgoZN9Rzg",
        name:"Asake",
        type:"artist",
        uri:"spotify:artist:3a1tBryiczPAZpgoZN9Rzg"}],
        external_urls:{spotify: "https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke"},
        href:"https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke",
        id:"18ykMJdXdkUldVNESaXdeswDke",
        album: {
            images:
        [{
        height:640,
        url:"https://i.scdn.co/image/ab67616d0000b273f319950b3286ff2ea710571e",
        width:640},
        {
        height:300,
        url:"https://i.scdn.co/image/ab67616d00001e02f319950b3286ff2ea710571e",
        width:300}]
        },
        name:"Bandana",
        release_date:"2022-07-13",
        release_date_precision:"day",
        total_tracks:1,
        type:"album",
        uri:"spotify:album:18ykMJdXdkUldVNESaXDke"
    },
    {
        album_type: "SINGLE", artists:
        [{external_urls:{spotify: "https://open.spotify.com/artist/75VKfyoB…"},
        href:"https://api.spotify.com/v1/artists/75VKfyoBlkmrJFDqo1o2VY",
        id:"75VKfyoBlkmrJFDqo1o2VY",
        name:"Fireboy DML",
        type:"artist",
        uri:"spotify:artist:75VKfyoBlkmrJFDqo1o2VY"},
        {external_urls:{spotify: "https://open.spotify.com/artist/3a1tBryi…"},
        href:"https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg",
        id:"3a1tBryiczPAZpgoZN9Rzg",
        name:"Asake",
        type:"artist",
        uri:"spotify:artist:3a1tBryiczPAZpgoZN9Rzg"}],
        external_urls:{spotify: "https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke"},
        href:"https://api.spotify.com/v1/albums/18ykMJdXdkUldVNESaXDke",
        id:"18ykMJdXdkUldVNESaXdeswDke",
        album: {
            images:
        [{
        height:640,
        url:"https://i.scdn.co/image/ab67616d0000b273f319950b3286ff2ea710571e",
        width:640},
        {
        height:300,
        url:"https://i.scdn.co/image/ab67616d00001e02f319950b3286ff2ea710571e",
        width:300}]
        },
        name:"Bandana",
        release_date:"2022-07-13",
        release_date_precision:"day",
        total_tracks:1,
        type:"album",
        uri:"spotify:album:18ykMJdXdkUldVNESaXDke"
    }
];