//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTvShow {
    constructor(showName, genre, longOfShow, mainCharacter) {
        this.showName = showName
        this.genre = genre
        this.longOfShow = longOfShow
        this.mainCharacter = mainCharacter
    }
    play() {
        console.log("Press play")
    }
    pause() {
        console.log("Press pause")
    }
    addToPlaylist() {
        console.log("Add to playlist this show")
    }
}
let Lupin = new NetflixTvShow("Lupin", "Criminal", "2 seasons", "Lupin")
console.log(Lupin.genre)
