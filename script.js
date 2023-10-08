function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

// ao inves de colocar tudo isso, posso apenas colocar ''toggle''

//pegar a tag 'img'
const img = document.querySelector('#profile img')

//substituir a imagem 

if (html.classList.contains('light')) {
//se tivr light mode adicionar img light 

img.setAttribute('src', './assets/black.jpg')
//setiver sem ligh mode, usar avatar padrão
}
else {
img.setAttribute('src','./assets/white.jpg')

}
}



