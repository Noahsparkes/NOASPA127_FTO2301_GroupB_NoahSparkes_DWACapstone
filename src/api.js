

export const getPodcast = () => {

 document.getElementById("getPodcast").addEventListener("click", getPodcast);

 fetch('https://podcast-api.netlify.app/shows')
    .then((res) => res.json())
    .then((data) => {
    let output = "<h2>Podcasts</h2>";

    if (Array.isArray(data)) {
        data.forEach(function (preview) {
        output += `
            <div class="podList">
            <h3>${preview.title}</h3>
            <!--<p>${preview.description}</p>-->
            <h3>SEASONS: ${preview.seasons}</h3>
            <img class="podImage" src="${preview.image}" alt="Podcast Image">
            <h4>GENRE: ${preview.genre}</h4>
            <button class="getPodcastData" data-id="${preview.id}">Get Podcast Data</button>
            </div>  
        `;
        });

        document.getElementById("output").innerHTML = output;
    } else {
        // Handle the case when the response is not an array
        output += "<p>No podcasts found.</p>";
        document.getElementById("output").innerHTML = output;
    }

    // Add event listener to the parent element and use event delegation
    document.getElementById("output").addEventListener("click", function (event) {
        if (event.target.classList.contains("getPodcastData")) {
        const podcastId = event.target.dataset.id;
        console.log(podcastId)
        fetch(`https://podcast-api.netlify.app/id/${podcastId}`)
            .then((res) => res.json())
            .then((data) => {
            // Process the retrieved data for the specific podcast ID
            console.log(data);
            })
            .catch((err) => console.log(err));
        }
    });
    })
    .catch((err) => console.log(err));
}