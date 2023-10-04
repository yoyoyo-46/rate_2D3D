function header(){
  var html = "";
  html += '<header>';
  html += '<div class="container">';
  html += '<div class="header-left">';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/"><img src="https://yoyoyo-46.github.io/rate_2D3D/common/img/rate_home.png"></a>';
  html += '</div>';
  html += '<div class="header-center">';
  html += '<script  type="text/javascript" src="https://yoyoyo-46.github.io/rate_2D3D/common/ad.js"></script>';
  html += '<script type="text/javascript">horizontal_short();</script>';
  html += '</div>';
  html += '<div class="header-right">';
  html += '<a href="https://timeline.line.me/social-plugin/share?url=https://yoyoyo-46.github.io/rate_2D3D/index.html"><img src="https://yoyoyo-46.github.io/rate_2D3D/common/img/line.jpg" class="line"></a>';
  html += '<a href="https://twitter.com/intent/tweet?url=https://yoyoyo-46.github.io/rate_2D3D/index.html&via=rate_2D3D&hashtags=らて"><img src="https://yoyoyo-46.github.io/rate_2D3D/common/img/twitter.jpg" class="twitter"></a>';
  html += '<a href="https://www.facebook.com/sharer/sharer.php?u=https://yoyoyo-46.github.io/rate_2D3D/index.html"><img src="https://yoyoyo-46.github.io/rate_2D3D/common/img/facebook.png" class="facebook"></a>';
  html += '<div class="btn-trigger" id="hamburger" onclick="hamburger()">';
  html += '<span></span>';
  html += '<span></span>';
  html += '<span></span>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</header>';
  document.write(html);
}

function nav(){
  var html = "";
  html += '<nav class=nav1 id="nav">';
  html += '<div class="container">';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/nav/g2d/g2d.html" class="G2D">2D Game</a>';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/nav/g3d/g3d.html" class="G3D">3D Game</a>';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/nav/a2d/a2d.html" class="A2D">2D Animation</a>';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/nav/a3d/a3d.html" class="A3D">3DCG Animation</a>';
  html += '<a href="https://yoyoyo-46.github.io/rate_2D3D/nav/other/other.html" class="Other">Other</a>';
  html += '</div>';
  html += '</nav>';
  document.write(html);
}
