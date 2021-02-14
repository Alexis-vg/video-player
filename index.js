const playButton = document.querySelector(".play-btn");
const pauseButton = document.querySelector(".pause-btn");
const muteButton = document.querySelector(".mute-btn");
const video = document.querySelector("video");

const playVideo = () => {
  video.play();
};
playButton.addEventListener("click", playVideo);

const pauseVideo = () => {
  video.pause();
};
pauseButton.addEventListener("click", pauseVideo);

const muteVideo = () => {
  if (!video.muted) {
    video.muted = true;
    swal("Muted video ");
  } else {
    video.muted = false;
  }
};
muteButton.addEventListener("click", muteVideo);
