$(document).ready(function () {
  var $headerInner = $('.header-inner');
  var $sidebar = $('#sidebar');
  var getSidebarTop = function(){
    return $headerInner.height() + CONFIG.sidebar.offset;
  };
  var setSidebarMarginTop = function(sidebarTop){
    return $sidebar.css({ 'margin-top': sidebarTop });
  };
  var mql = window.matchMedia('(min-width: 991px)');
  setSidebarMarginTop(getSidebarTop()).show();
  mql.addListener(function(e){
    if(e.matches){
      setSidebarMarginTop(getSidebarTop());
    }
  });

  /**
   * My Cat's footprints
   */
  var footprint = document.querySelector('.footprint');

  var genDotFrom = function(box, leftCount) {
    var div = document.createElement('div');
    var boxW = box.clientWidth;
    var boxH = box.clientHeight;
    div.className = 'fp once';
    div.style.left = genRandom(0, boxW) + 'px';
    div.style.top = genRandom(0, boxH) + 'px';
    box.appendChild(div);

    // div.addEventListener("animationend", function() {
    //   box.removeChild(div);
    // }, false);
  }

  var genRandom = function(min, max) { return Math.floor(Math.random() * (max - min)) + min; }

  var renderDot = function(box, num, delay) {
    let count = 0;
    while (count < num) {
      count++;
      setTimeout(function() {
        genDotFrom(box, count);
      }, genRandom(0, delay));
    }
  }

  renderDot(footprint, 40, 30000);
});
