const btn = document.querySelector('.footer__btn')


 
  btn.onclick = function ddd() {
    const disNone = document.querySelectorAll('.none')
    const disNone2 = document.querySelectorAll('.none-1120')
    let txt = document.querySelector('.footer__btn-txt')
    let width = screen.width;
    let stylenone =  window.getComputedStyle(disNone[0]);
    let stylenone2 =  window.getComputedStyle(disNone2[0]);
    if (stylenone.display == 'none' && stylenone2.display == 'none') {
    document.getElementById("myDIV3").style.display = "grid";
    document.getElementById("myDIV4").style.display = "grid";
    document.getElementById("myDIV5").style.display = "grid";
    document.getElementById("myDIV1").style.display = "grid";
    document.getElementById("myDIV2").style.display = "grid";
    document.getElementsByClassName('footer__btn-txt')[0].textContent = "Скрыть";
    } 
    else if(stylenone.display == 'none'){
      document.getElementById("myDIV3").style.display = "grid";
      document.getElementById("myDIV4").style.display = "grid";
      document.getElementById("myDIV5").style.display = "grid";
      document.getElementById("myDIV1").style.display = "grid";
      document.getElementById("myDIV2").style.display = "grid";
      document.getElementsByClassName('footer__btn-txt')[0].textContent = "Скрыть";
    }
    else if(stylenone2.display == 'none'){
    document.getElementById("myDIV1").style.display = "grid";
    document.getElementById("myDIV2").style.display = "grid";
    document.getElementsByClassName('footer__btn-txt')[0].textContent = "Скрыть";
    }
    else if(stylenone.display == 'grid' && width > 1119){
      document.getElementById("myDIV3").style.display = "none";
      document.getElementById("myDIV4").style.display = "none";
      document.getElementById("myDIV5").style.display = "none";
      document.getElementsByClassName('footer__btn-txt')[0].textContent = "Показать все";
      location.reload();
    }
    else if(stylenone.display == 'grid' && width < 1119){
      document.getElementById("myDIV3").style.display = "none";
      document.getElementById("myDIV4").style.display = "none";
      document.getElementById("myDIV5").style.display = "none";
      document.getElementById("myDIV1").style.display = "none";
      document.getElementById("myDIV2").style.display = "none";
      document.getElementsByClassName('footer__btn-txt')[0].textContent = "Показать все";
      location.reload();
    }
  }
