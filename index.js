const youtubeApi = document.querySelector('.youtubeApi-container');
/* console.log(youtubeApi) */
const v = 'https://www.youtube.com/watch?v=';
const key = 'AIzaSyDItEu4dUQISg77wPjpHhMyVFvsQsnuFJs';
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UComu3ao5983Wpni7R_JcovQ&maxResults=4&order=date&key=${key}`).then(
    data => {
        return data.json();
    }
)
.then(res => {
    const videos = res.items;
    for(video of videos) {
        youtubeApi.innerHTML += `
        <div class="grid-item">
            <a href="${v}${video.id.videoId}" target="_blank" rel="noopener noreferrer">
                <img src="${video.snippet.thumbnails.high.url}">
                <div class="overlay">
                    <p>follow@thecritics001 <i class="fa-brands fa-youtube"></i></p>
                </div>
            </a>
        </div>
        `
    }
    console.log(res.items);
}).catch(err =>{
    console.log(err)
})
