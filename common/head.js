function head(){
  var html = "";
  html += '<!-- Global site tag (gtag.js) - Google Analytics -->';
  html += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-219517772-1"></script>';
  html += "<script>";
  html += "window.dataLayer = window.dataLayer || [];";
  html += "function gtag(){dataLayer.push(arguments);}";
  html += "gtag('js', new Date());";
  html += "gtag('config', 'UA-219517772-1');";
  html += "</script>";
  html += '<meta charset="utf-8">';
  html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  html += '<meta property="og:site_name" content="らてオフィシャルサイト" />';
  html += '<meta name="twitter:site" content="@rate_2D3D" />';
  html += '<meta name=“twitter:creator” content=“@rate_2D3D />';
  html += '<link rel="shortcut icon" href="https://yoyoyo-46.github.io/rate_2D3D/common/img/favicon.ico" type="image/x-icon">';
  html += '<link rel="apple-touch-icon" href="https://yoyoyo-46.github.io/rate_2D3D/common/img/apple-touch-icon-180x180.png" sizes="180x180">';
  html += '<link rel="icon" href="https://yoyoyo-46.github.io/rate_2D3D/common/img/android-touch-icon-192x192.png" type="image/png" sizes="192x192">';
  html += '<link rel="stylesheet" href="https://yoyoyo-46.github.io/rate_2D3D/common/common.css">';
  html += '<link rel="stylesheet" href="https://yoyoyo-46.github.io/rate_2D3D/common/responsive.css">';
  document.write(html);
}
