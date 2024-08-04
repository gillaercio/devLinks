function toogleMenu() {
  const html = document.documentElement;
  html.classList.toggle('light')

  // pega a tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adiciona imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito usando usando óculos escuros e casaco em um fundo degrade violeta e azul claro"
    )
  } else {
    // se não tiver light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito usando usando óculos e casaco em um fundo degrade violeta e azul claro"
    )
  }
}