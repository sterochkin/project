function char(){

var gustoname = document.querySelector('.gustoname');
var gustoprice = document.querySelector('.gustoprice');
var div = document.createElement('div');
var li = document.createElement('li');
var cheifname = document.querySelector('.cheifname');
var cheifprice = document.querySelector('.cheifprice');
const preview = document.querySelectorAll(".preview_small-img")
const circle = document.querySelectorAll(".preview__color-border")
let buttons = document.querySelectorAll(".tabheader_char-item")
const buttoncheif = document.querySelectorAll(".cheifsize__button-style")
const buttongusto = document.querySelectorAll(".gustosize__button-style")
const cheif = ['11кг','111x111(мм)', '111x111(мм)', '20 мин', '2 кг/ч', '1500р']
const gusto = ["64кг", "600x400(мм)", "185x470(мм)", "20 мин", "2 кг/ч", '1810р']

buttoncheif.forEach(cheif => {
  cheif.addEventListener('click', () => {
    buttoncheif.forEach((cheif) => cheif.classList.remove('cheifsize__button-style-active'));
    cheif.classList.add('cheifsize__button-style-active');
    if(cheif.classList.contains("litecheif")){
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFLITE.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFLITE2.png'
    } else if(cheif.classList.contains("averagecheif")){
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFAVERAGE.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFAVERAGE2.png'
    }else {
      document.querySelector(".cheifliteimg1").src = '/img/cheif/CHEIFPRO.png'
      document.querySelector(".cheifliteimg2").src = '/img/cheif/CHEIFPRO2.png'
    }
  });
})
buttongusto.forEach(gusto => {
  gusto.addEventListener('click', () => {
    buttongusto.forEach((gusto) => gusto.classList.remove('gustosize__button-style-active'));
    gusto.classList.add('gustosize__button-style-active');

    if(gusto.classList.contains("litegusto")){
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOLITE.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOLITE2.png'
    } else if(gusto.classList.contains("averagegusto")){
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOAVERAGE.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOAVERAGE2.png'
    }else {
      document.querySelector(".gustoliteimg1").src = '/img/gusto/GUSTOPRO.png'
      document.querySelector(".gustoliteimg2").src = '/img/gusto/GUSTOPRO2.png'
    }
  });
})

circle.forEach(color => {
  color.addEventListener('click', () => {
    circle.forEach((color) => color.classList.remove('preview__color-border-active'));
    color.classList.add('preview__color-border-active');
  });
})

for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('tabheader_char-item-active')
     );
     if(this.classList.contains("gusto"))
     { 
      li.innerHTML = 'Печь ALHA GUSTO';
      gustoname.appendChild(li);
      div.innerHTML = '1810 руб.';
      gustoprice.appendChild(div);

 
      document.querySelectorAll('.info').forEach((n, i) => n.textContent = gusto[i])
      document.querySelector(".preview_img").src = '/img/Gusto.png';
      document.querySelector(".fotosmall1").src = '/img/gusto/small1.png'
      document.querySelector(".fotosmall2").src = '/img/gusto/small2.png'
      document.querySelector(".fotosmall3").src = '/img/gusto/small3.png'
     }
     else{

      li.innerHTML = 'Печь ALHA CHEIF';
      cheifname.appendChild(li);
      div.innerHTML = '1390 руб.';
      cheifprice.appendChild(div);

      document.querySelectorAll('.info').forEach((n, i) => n.textContent = cheif[i])
      document.querySelector(".preview_img").src = '/img/Cheif.png';
      document.querySelector(".fotosmall1").src = '/img/cheif/small1.png'
      document.querySelector(".fotosmall2").src = '/img/cheif/small2.png'
      document.querySelector(".fotosmall3").src = '/img/cheif/small3.png'
     }
     this.classList.toggle('tabheader_char-item-active');
   });
};

preview.forEach(border => {
  border.addEventListener('click', () => {
    preview.forEach((border) => border.classList.remove('preview_small-img-active'));
    border.classList.add('preview_small-img-active');
    if (button.classList.contains("tabheader_char-item-active") && border.classList.contains("preview_small-img")){
    if(border.classList.contains("fotosmall1")){     
      document.querySelector(".preview_img").src = '/img/cheif/1.png'
  } else if(border.classList.contains("fotosmall2")){
      document.querySelector(".preview_img").src = '/img/cheif/2.png'
  }else{
      document.querySelector(".preview_img").src = '/img/cheif/3.png'
  }

} else {
    if(border.classList.contains("fotosmall1")){
      document.querySelector(".preview_img").src = '/img/gusto/1.png'
  } else if(border.classList.contains("foto2")){
    document.querySelector(".preview_img").src = '/img/gusto/2.png'
  }else{
    document.querySelector(".preview_img").src = '/img/gusto/3.png'
  }

}
});
})
}

export default char;