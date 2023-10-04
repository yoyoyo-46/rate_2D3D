function hamburger() {

      target = document.getElementById("hamburger");
      nav = document.getElementById("nav");

      if(target.className == "btn-trigger"){
        target.classList.add("active");
        nav.classList.add("is-active");
      }else{
        target.classList.remove("active");
        nav.classList.remove("is-active");
      }

}

const PageTopBtn = document.getElementById('js_scroll_top');
PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return; // 要素がなかったら処理をキャンセル

  var showTiming = window.innerHeight > 559 ? 100 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);


for(let num = 1; num <= 8; num ++){
    let idName = String("work" + num);
    const work = document.getElementById(idName);
     idName = String("border" + num);
    const border = document.getElementById(idName);

    work.addEventListener('mouseover', () => {

        border.classList.add("hover");

    }, false);

    work.addEventListener('mouseleave', () => {

        border.classList.remove("hover");

    }, false);

}
