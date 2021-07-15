// x: currentPositionY
// y: opacityVideo
// tại x1 = 0 thì y1 = 1
// tại x2 = 567 thì y2 = 0
// viết phương trình đường thẳng đi qua 2 điểm (0;1) (567;0):
// (x1 - x2)/(y1 - y2) = (x-x1)/(y - y1) = (x-x2)/(y - y2) => y = (567-x)/567

window.onscroll = function () {
  var currentPositionY = window.pageYOffset;
  var opacityVideo = 1 - currentPositionY / 567;
  document.querySelectorAll(".sellCarousel_content video")[0].style.opacity =
    opacityVideo;
};
