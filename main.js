fetch("https://lit-fortress-6467.herokuapp.com/object")
    .then(function (event) {
        return event.json()
    })
    .then(function (albums) {
        let albumList = albums.results
        //console.log(albumList)
        for (let i = 0; i < albumList.length; i++) {
            let albumArtName = albumList[i].cover_art
            let albumTitle = albumList[i].title
            //console.log(albumTitle)
            let albumBox = document.getElementById('album_row')
            //console.log(artWork)
            let albumArt = document.createElement('img')
            albumArt.src = `../playlist/images/${albumArtName}`
            //console.log(albumLink)
            let albumBin = document.getElementById('album_bin')
            albumArt.addEventListener("click", function (event) {
                // console.log(event)
                let binnedAlbum = document.createElement('div')
                albumBin.appendChild(binnedAlbum)
                binnedAlbum.textContent = albumTitle
                //console.log(binnedAlbum)
                //console.log(albumBin)
            })
            albumBox.appendChild(albumArt)
        }
        let clearButton = document.getElementById("clear_button")
            clearButton.addEventListener('click', function (clear) {
                console.log('is this thing on?')                
            })
    })