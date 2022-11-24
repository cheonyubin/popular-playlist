var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'Kh-uVamKQOI', 
    playerVars: {
      autoplay: true , 
      loop: true , 
      playlist: 'Kh-uVamKQOI' 
    },
    events: {
      onReady: function (event) {
        event.target.mute() 
      }
    }
  })
}
