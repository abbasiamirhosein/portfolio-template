let index = 1
let sliderBtnList = document.getElementsByClassName('slider-btn')

function translate() {
  let slider = document.getElementsByClassName('slider-card');
  for (let i=0; i < slider.length; i++) {

    if (index < slider.length-1) {
      if (index === 0) {
        slider[(slider.length-1)].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-1';
        slider[0].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-2';
        slider[1].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-3';
        if (i !== 1 && i !== 0 && i !== (slider.length-1)) {
          slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-hide';
        }
      } else {
        if (index === i) {
          slider[i-1].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-1';
          slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-2';
          slider[i+1].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-3';
          showSliderItem(i)
        } else if(index !== (i+1) && index !== (i-1)) {
          slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-hide';
        }
      }

    } else if (index === slider.length-1) {
      if (index === i) {
        slider[i-1].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-1';
        slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-2';
        slider[0].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-3';

        showSliderItem(i)
      } else if(i !== 0 && index !== (i-1)) {
        slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-hide';
      }
    } else if (index === slider.length) {
      if(i !== 0 && i !== 1 && i !== (slider.length-1)) {
        slider[i].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-hide';
      } else if (index > i) {
        slider[(slider.length-1)].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-1';
        slider[0].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-2';
        slider[1].className = 'slider-card position-absolute col-8 col-lg-10 mx-lg-auto row p-4 slider-card-3';
        showSliderItem(0)
      }
    }

  }

  if (index < slider.length) {
    index +=1
  } else {
    index = 1
  }
}

setTimeout(function () {setInterval(translate, 8000)}, 1000)

function showSliderItem(sliderIndex, cli = false) {
  for (let i=0; i < sliderBtnList.length; i++) {
    sliderBtnList[i].classList.remove('active-btn')
  }

  sliderBtnList[sliderIndex].classList.add('active-btn')
  if (cli) {
    index = sliderIndex
    translate()
  }

}