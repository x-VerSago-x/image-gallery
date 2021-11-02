var displayedImage = document.querySelector('.displayed-img')
var thumbBar = document.querySelector('.thumb-bar')
const dark = document.querySelector('.dark')
let transparent = 0
btn = document.querySelector('button')
var overlay = document.querySelector('.overlay')
let select
// можно использовать
const pathImages = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg',
]

for (let i = 0; i <= pathImages.length - 1; i++) {
  var newImage = document.createElement('img')
  newImage.setAttribute('src', pathImages[i])
  thumbBar.appendChild(newImage)
}

thumbBar.addEventListener('click', (e) => {
  select = document.querySelector('.select')
  if (select) {
    select.classList.remove('select')
    e.target.classList.add('select')
  } else {
    e.target.classList.add('select')
  }

  displayedImage.setAttribute('src', e.target.getAttribute('src'))
})
dark.addEventListener('click', () => {
  transparent++
  if (transparent === 10) {
    overlay.style.backgroundColor = 'rgba(0,0,0,1)'
  } else if (transparent > 10) {
    transparent = 0
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.' + transparent + ')'
  }
})
/* Wiring up the Darken/Lighten button */
