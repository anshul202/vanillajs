// let as=document.querySelector(".feed__item").firstElementChild.firstElementChild.getAttribute("data-url");

// let url=sessionStorage.setItem("url",as);

// let btn=document.querySelector(".feed__item");
// btn.addEventListener("click",()=>{
//     location.href="firstvid.htm";
// });


// let api_key = "AIzaSyCe2DEj5jKj6o1rK7kp1tAaTk_G_UkcLAU";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http="https://www.googleapis.com/youtube/v3/channels?";
const videoCardContainer = document.querySelector('.video-container');

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data=>{
    data.items.forEach(item => {
                 getChannelIcon(item);
             })
})
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon=(video_data)=>{
    fetch(channel_http+new URLSearchParams({
        key:api_key,
        part:'snippet',
        id:video_data.snippet.channelId
    }))
    .then(res=>res.json())
    .then(data=>{
        video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data)
        console.log(video_data); 
    })

}


 const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>`;
}

const searchInput = document.querySelector('.form-control');
const searchBtn = document.querySelector('.searchbutton');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})