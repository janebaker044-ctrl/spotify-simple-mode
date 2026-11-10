
console.log("Welcome to Spotify Simple Mode!");

// SEARCH FORM
const searchForm = document.querySelector("#searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const searchInput = document.querySelector("#songSearch");
        const searchMessage = document.querySelector("#searchMessage");

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {
            searchMessage.textContent = "Please enter a song or artist.";
            searchInput.focus();
        } else {
            searchMessage.textContent =
                "You searched for: " + searchValue +
                ". This is a sample search for your student prototype.";
        }
    });
}

// SAVE PLAYLIST CHOICE USING LOCAL STORAGE
const playlistButtons = document.querySelectorAll("[data-playlist]");
const playlistMessage = document.querySelector("#playlistMessage");

// Show the last saved playlist when the page opens
if (playlistMessage) {
    const savedPlaylist = localStorage.getItem("lastPlaylist");

    if (savedPlaylist) {
        playlistMessage.textContent =
            "Your last opened playlist was: " + savedPlaylist;
    }
}

// Save a playlist when its button is clicked
playlistButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const playlistName = button.dataset.playlist;

        localStorage.setItem("lastPlaylist", playlistName);

        if (playlistMessage) {
            playlistMessage.textContent =
                "You opened: " + playlistName +
                ". Your choice has been saved!";
        }
    });
});
