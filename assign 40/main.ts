// define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist: string, title:string, tracks?: number } = {
        artist:artist_name,
        title: album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
 // calling three function and creating 3 variables with different values
 let album1 = make_album("faiza","My Story");
 let album2 = make_album("zain", "enterpunure");
 let album3 = make_album("sonia", "webdeveloper", 10);
 //printing values og our object created by function
 console.log(album1);
 console.log(album2);
 console.log(album3);
 
