document.addEventListener("DOMContentLoaded", ()=> {
    fetch("")
    .then(response => response.json())
    .then(data => {
        allArtistInfo(data[0])
    })
})

