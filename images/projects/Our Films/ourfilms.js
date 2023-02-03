const key = 'AIzaSyDItEu4dUQISg77wPjpHhMyVFvsQsnuFJs';
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCq0OueAsdxH6b8nyAspwViw&maxResults=10&order=date&key=${key}`).then(
    data => {
        return data.json();
    }
)
.then(res => {
    console.log(res)
}).catch(err =>{
    console.log(err)
})