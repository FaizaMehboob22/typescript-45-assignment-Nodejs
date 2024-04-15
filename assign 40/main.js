// define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 variables with different values
var album1 = make_album("faiza", "My Story");
var album2 = make_album("zain", "enterpunure");
var album3 = make_album("sonia", "webdeveloper", 10);
//printing values og our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
