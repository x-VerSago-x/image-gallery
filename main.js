const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')
const dark = document.querySelector('.dark')
let transparent = 0
const overlay = document.querySelector('.overlay')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const pathImages = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
]

// Функция которая добавляет класс
function setSelect(obj) {
  let select = document.querySelector('.select')
  if (select) {
    select.classList.remove('select')
    obj.classList.add('select')
  } else {
    obj.classList.add('select')
  }
  displayedImage.setAttribute('src', obj.getAttribute('src'))
}

//уменьшение яркости
function SetLowerBrightness() {
  transparent++
  if (transparent === 10) {
    overlay.style.backgroundColor = 'rgba(0,0,0,1)'
  } else if (transparent > 10) {
    transparent = 0
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.' + transparent + ')'
  }
}
//Добавление слушателя объекты панели навигации(Боковые)
next.addEventListener('click', () => {
  const indexImg = pathImages.indexOf(displayedImage.getAttribute('src'))
  if (indexImg === pathImages.length - 1) {
    setSelect(thumbBar.firstElementChild)
  } else {
    setSelect(thumbBar.children[indexImg + 1])
  }
})

prev.addEventListener('click', () => {
  const indexImg = pathImages.indexOf(displayedImage.getAttribute('src'))
  if (indexImg === 0) {
    setSelect(thumbBar.lastChild)
  } else {
    setSelect(thumbBar.children[indexImg - 1])
  }
})

//Создание img и добавление его в бар-панель
for (let i = 0; i <= pathImages.length - 1; i++) {
  var newImage = document.createElement('img')
  newImage.setAttribute('src', pathImages[i])
  thumbBar.appendChild(newImage)
}

//Установка слушателя на изображения бара и установки активной страницы по клику
for (let i = 0; i <= thumbBar.children.length - 1; i++) {
  thumbBar.children[i].addEventListener('click', (e) => {
    setSelect(e.target)
  })
}
dark.addEventListener('click', SetLowerBrightness)
