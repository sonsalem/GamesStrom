'use strict'

// Loading

let loading = document.querySelector('.loading');

window.addEventListener('load', function () {
  setTimeout(() => {
    loading.classList.add('hide')
  }, 500);
})

// Pointer Cursor

let pointer = document.querySelectorAll('.cursorHV');

pointer.forEach(el => {
    el.addEventListener('mousemove', function (e) {
      this.style.setProperty('--y', `${Math.ceil(e.pageY - this.getBoundingClientRect().top - scrollY)}px`);
      this.style.setProperty('--x', `${Math.ceil(e.pageX - this.getBoundingClientRect().left - scrollX)}px`);
    })
})

// Menu

let menuLink = document.querySelectorAll('nav .menu li');

menuLink.forEach(function (el) {
  el.addEventListener('click', function () {
    if (el.lastElementChild.classList.contains('show')) {
      menuLink.forEach(e => e.classList.remove('active-load'));
      document.querySelectorAll('nav .menu li .mega-menu').forEach(e => e.classList.remove('show'))

    } else {
      menuLink.forEach(e => e.classList.remove('active-load'));
      document.querySelectorAll('nav .menu li .mega-menu').forEach(e => e.classList.remove('show'))
      el.classList.toggle('active-load');
      el.lastElementChild.classList.toggle('show');

    }
  })
})

let menuIco = document.querySelector('.menu-ico');
let menu = document.querySelector('nav .menu');

menuIco.addEventListener('click',function () {
  menu.classList.toggle('show')
})

let heart = document.querySelectorAll('.heart');

if (localStorage.getItem("heart")) {
  heart.forEach(el => {
    el.firstElementChild.classList.replace('fa-regular', 'fa-solid');
    el.firstElementChild.style.color = '#f00'
  })
}

heart.forEach(el => {
  el.addEventListener('click',function () {
    if (el.firstElementChild.classList.contains('fa-regular')) {
      localStorage.setItem('heart', 'true')
      el.firstElementChild.classList.replace('fa-regular', 'fa-solid');
    } else {
      window.localStorage.removeItem('heart')
      el.firstElementChild.classList.replace('fa-solid', 'fa-regular');
    }
    if (el.firstElementChild.style.color == 'rgb(255, 0, 0)') {
      el.firstElementChild.style.color = '#fff'
    } else {
      el.firstElementChild.style.color = '#f00'
    }
  });
})


let search = document.querySelector('.search');
let searchIco = document.querySelectorAll('.searchico');

searchIco.forEach(el => {
  el.addEventListener('click', function () {
    search.classList.toggle('show')
  })
})


// aside

let settings = document.querySelector('aside .settings');
let tools = document.querySelector(' aside .tools');

if (settings != undefined) {
  settings.onclick = function () {
    tools.classList.toggle('active');
  }
}

window.addEventListener('scroll', function() {
  if (this.scrollY >= 500) {
    tools.classList.add('active')
  } else {
    tools.classList.remove('active')
  }
})


let toTop = document.querySelectorAll('.toTop');

toTop.forEach(el => {
  el .addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      'behavior': 'smooth',
    })
  })
})


// Anomation Worrd Landing


setInterval(() => {

  let animatWord = document.getElementById('animationWord');

  if (animatWord.textContent.length > 1) {
    animatWord.textContent = animatWord.textContent.substring(0, animatWord.textContent.length-1)
  } else {
    animatWord.textContent = 'Entertainment'
  }

}, 150);

// Carousel Banner

$(document).ready(function () {
  $(".owl-banner").owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    margin:10,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  })
});


window.addEventListener('load', function () {
  let rightOwl = document.querySelectorAll('.owl-next, .owl-prev');
  rightOwl.forEach(el => {
    el.addEventListener('mousemove', function (e) {
      this.style.setProperty('--y', `${Math.ceil(e.pageY - this.getBoundingClientRect().top - scrollY)}px`);
      this.style.setProperty('--x', `${Math.ceil(e.pageX - this.getBoundingClientRect().left - scrollX)}px`);
    })
    el.classList.add('cursorHV')
  })
})

// Start Count

let state = document.querySelector('.state');
let stateNums = document.querySelectorAll('.state-num');

let start = false;

window.addEventListener('scroll', function () {
  if (scrollY >= state.offsetTop-150) {
    if (!start) {
      stateNums.forEach(startCount)
    }
    start = true
  }
})

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === el.dataset.goal) {
      clearInterval(count)
    }
  }, 2000 / goal)
}

// Shuffle

let shuffleItems = document.querySelectorAll('.shuffle .box');
let gamesContents = document.querySelectorAll('.games > *');


if (localStorage.getItem('shuffleActive')) {
  shuffleItems.forEach(el => {
    if (el.id == localStorage.getItem('shuffleActive')) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
  gamesContents.forEach(el => {
    if (el.dataset.place == localStorage.getItem('shuffleActive')) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })
}

window.addEventListener('load', function () {
  gamesContents.forEach(el => !el.classList.contains('active') ? el.classList.add('hideAnimate') : "")
})

shuffleItems.forEach(el => {
  el.addEventListener('click', function () {
    shuffleItems.forEach(el => el.classList.remove('active'))
    this.classList.add('active')
    localStorage.setItem('shuffleActive', `${this.id}`)
    gamesContents.forEach(ele => {
      if (ele.dataset.place == this.id) {
        ele.classList.remove('hideAnimate')
        ele.classList.add('active')
      } else {
        ele.classList.add('hideAnimate')
        ele.classList.remove('active')
      }
    })
  })
})

// let game = document.querySelectorAll('.game');
// let gameNums = document.querySelectorAll('.game-num');

// function gameNumsFun(el,i) {
//   el.setAttribute('data-placeGame', i)
// }

// game.forEach(gameNumsFun)
// gameNums.forEach(gameNumsFun)


// window.addEventListener('scroll', function () {
//   game.forEach(ele => {
//     gameNums.forEach(el => {
//       if (el.dataset.placeGame === ele.dataset.placeGame) {
//         if (scrollY >= el.offsetTop-150) {
//             let goal = parseInt(el.dataset.goal);
//             let count = setInterval(() => {
//               if (parseInt(el.textContent) === parseInt(el.dataset.goal)) {
//                 clearInterval(count)
//               }
//               el.textContent++;
//             }, 20000 / goal)
//         }
//       }
//     })
//   })
// })

// Team Section

$(document).ready(function () {
  $(".owl-team").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    margin:30,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive : {
      0: {
        items: 1
      },
      567: {
        items: 3
      },
      767: {
        items: 5
      }
    }
  })
});

// Statistics Nums

let statistics = document.querySelector('.statistics');
let statesNums = document.querySelectorAll('.states-num');

let statisticsStart = false;

document.querySelectorAll('.statistics .box').forEach(el => {
  el.addEventListener('mouseenter', function () {
    document.querySelectorAll('.statistics .box').forEach(el => el.classList.remove('active'));
    this.classList.add('active')
  })
})

window.addEventListener('scroll', function () {
  if (scrollY >= statistics.offsetTop-350) {
    if (!statisticsStart) {
      statesNums.forEach(startCount)
    }
    statisticsStart = true
  }
})

// Services

$(document).ready(function () {
  $(".owl-services").owlCarousel({
    nav: false,
    loop: true,
    dots: false,
    margin:30,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive : {
      0: {
        items: 1
      },
      567: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  })
});

// Img Open

let imageOpen = document.querySelectorAll('.img-open');

imageOpen.forEach(el => {
  el .addEventListener('click', function () {
    this.classList.toggle("active")
    document.querySelector('.opacityBg').classList.toggle('active')
  })
})

// Owl Testimonials

$(document).ready(function () {
  $(".owl-testimonials").owlCarousel({
    nav: true,
    loop: true,
    items: 1,
    dots:false,
    autoplayTimeout:3000,
    autoplay: true,
    margin: 10,
    items:1,
  })
});


let itemTestim = document.querySelectorAll('.owl-testimonials .item');
let cureentItem = document.querySelectorAll('.owl-testimonials .item .current');
let endItem = document.querySelectorAll('.owl-testimonials .item .end');

cureentItem.forEach((el, i) => {
  el.textContent = i+1
})

endItem.forEach(el => {
  el.textContent = itemTestim.length
})

