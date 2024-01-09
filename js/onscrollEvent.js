// x: currentPositionY
// y: opacityVideo
// tại x1 = 0 thì y1 = 1
// tại x2 = 567 thì y2 = 0
// viết phương trình đường thẳng đi qua 2 điểm (0;1) (567;0):
// (x1 - x2)/(y1 - y2) = (x-x1)/(y - y1) = (x-x2)/(y - y2) => y = (567-x)/567

/**
   * @description: linear function
   * @param {number} x1 - number of legend Characters
   * @param {number} y1 - legendShift
   * @param {number} x2 - number of legend Characters
   * @param {number} y2 - legendShift
   * @param {number} x - number of legend Characters
   * @returns {number} - legendShift
   */
/**
  getLegendShiftBasedOnTwoPair(x1: number, y1: number, x2: number, y2: number, x: number): number {
    let m = (y2 - y1) / (x2 - x1);
    let b = y1 - m * x1;
    let y = m * x + b;
    return y;
  }
*/

window.onscroll = function () {
  var currentPositionY = window.pageYOffset;
  var opacityVideo = 1 - currentPositionY / 567;
  document.querySelectorAll(".sellCarousel_content video")[0].style.opacity =
    opacityVideo;
};
