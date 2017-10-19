var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'sWjTnBmCHTY',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

$(document).ready(function() {
  $('.js-play-video').click(function() {
    var id = $(this).data('youtube-id');
    player.loadVideoById(id);
  });
})
