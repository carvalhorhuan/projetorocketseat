function toggleMode() {
    //altera a classe principal que nesse projeto está no HTML.
    html.classList.toggle('light')
    //substituir imagens.
    Const img = querySelector(".profile img")
    if(html.classList.constains('light')){
    //se tiver light mode adicionar imagem light.
    img.setAttribute('src, '../imagem/avatar-light.png)}else{
    //se não tiver light no atributo.
    img.setAttribute('src, '/imagem/avatar.png)
    }

}

