let listFigure = []
let listPainting = []

function createPaintingItem(imagem, nome, valor) {
  listPainting.push({
    imagem: imagem,
    nome: nome,
    valor: valor
  })
}

function createActionItem(imagem, nome, valor) {
  listFigure.push({
    imagem: imagem,
    nome: nome,
    valor: valor
  })
}

createActionItem(`assets/img/actions/dragonballpersonagem.jpg`, 'Goku', 15)
createActionItem(`assets/img/actions/animewoman.jpg`, 'Anime Woman', 15)
createActionItem(
  `https://m.media-amazon.com/images/I/715zpYjd9sL._AC_SX425_.jpg`,
  'Hinata',
  15
)
createActionItem(
  `https://cf.shopee.com.br/file/5d2eaaa86b66c7c8fa83c3d8551f09d1`,
  'Naruto',
  15
)
createActionItem(
  `https://cdn.geekay.com/media/catalog/product/cache/f16f349b720da0a7b8b90d96299b4477/2/0/20220615180413.jpg`,
  'Sasuke',
  15
)
createActionItem(
  `https://http2.mlstatic.com/D_NQ_NP_658657-MLB44211378527_112020-O.jpg`,
  'Gaara',
  15
)
createActionItem(`assets/img/actions/starwarspersonagem.jpg`, 'Baby Yoda', 15)

createActionItem(
  `https://ae01.alicdn.com/kf/H86dd71cb1b4347a1b4b39c6bf305f8fft/Boneco-colecion-vel-do-naruto-brinquedo-de-pvc-com-est-tua-e-dor-em-akatsuki-270mm.jpg_Q90.jpg_.webp`,
  'Pain',
  15
)

createPaintingItem('assets/img/painting/clock.jpg', 'Relógio', 15)
createPaintingItem('assets/img/painting/gamepad.jpg', 'Gamepad', 15)
createPaintingItem('assets/img/painting/personagem.jpg', 'Personagem', 15)
createPaintingItem(
  'https://pbs.twimg.com/media/FA3FaGvVQAcaXO_.jpg',
  'NFT Kakashi',
  15
)
createPaintingItem(
  'https://pbs.twimg.com/media/FA2RedVVIAAbnlw.jpg',
  'NFT Naruto',
  15
)
createPaintingItem(
  'https://lh3.googleusercontent.com/48uiTthG2onwY84NplXjl3huU2MpCV87UXgF_sOHIxlwDrut6LnDljpEnj067X3UYM8gw02jik-gIfrJYMun7WatDMsi6OPB-mn8=w600',
  'NFT Naruto Kurama',
  15
)
createPaintingItem(
  'https://lh3.googleusercontent.com/pvhJaJtVpvpmVeUqnfdH0qiL_YiEojadKMTe3gOJkqusbOEdYiEsQrGQigeRp72zTYKtYVcA1FlFZNmX0nafZAE1TXBmxHrIyiUwKQ=w600',
  'NFT Shikamaru',
  15
)
createPaintingItem(
  'https://lh3.googleusercontent.com/tBmLb1m1k5i1PI_7sZI-AFpwT26HNK2-MLjyJfYD3QroLYq5wmJEMj-Q7-ObDCrsveFv6fpP6eQP53hifcJ6ANfj0kimYeHQWwDg=w1400-k',
  'NFT Sasuke',
  15
)

let categoriaAction = document.getElementsByClassName('categoriaAction')[0]
let categoriaPaintings =
  document.getElementsByClassName('categoriaPaintings')[0]

function listarProduto(listaProdutos, vitrine) {
  for (let i = 0; i < listaProdutos.length; i++) {
    let produto = listaProdutos[i]
    if (vitrine == categoriaAction) {
      let cardProduto = criarCardProdutoAction(produto)
      vitrine.appendChild(cardProduto)
    }
    if (vitrine == categoriaPaintings) {
      let cardProduto = criarCardProdutoPaint(produto)
      vitrine.appendChild(cardProduto)
    }
  }
}

console.log(categoriaAction)
console.log(categoriaPaintings)

listarProduto(listFigure, categoriaAction)
listarProduto(listPainting, categoriaPaintings)

function criarCardProdutoAction(produto) {
  let listaProdutos = document.getElementsByClassName('listaProdutosAction')[0]
  let cardsConteudo = document.getElementsByClassName('cardsConteudoAction')[0]

  let imagem = produto.imagem
  let nome = produto.nome
  let valor = produto.valor

  let li = document.createElement('li')
  let divCards = document.createElement('div')

  listaProdutos.appendChild(li)
  li.appendChild(divCards)

  let tagFigure = document.createElement('figure')
  let tagImg = document.createElement('img')
  tagFigure.appendChild(tagImg)
  let tagNome = document.createElement('h3')
  let tagValor = document.createElement('p')

  tagImg.src = imagem
  tagNome.innerText = nome
  tagValor.innerText = `R$ ${valor}`.replace('.', ',')

  divCards.classList.add('card')

  divCards.append(tagFigure, tagNome, tagValor)

  return cardsConteudo
}

function criarCardProdutoPaint(produto) {
  let listaProdutos = document.getElementsByClassName('listaProdutosPaint')[0]
  let cardsConteudo = document.getElementsByClassName('cardsConteudoPaint')[0]
  let imagem = produto.imagem
  let nome = produto.nome
  let valor = produto.valor

  let li = document.createElement('li')
  let divCards = document.createElement('div')

  listaProdutos.appendChild(li)
  li.appendChild(divCards)

  let tagFigure = document.createElement('figure')
  let tagImg = document.createElement('img')
  tagFigure.appendChild(tagImg)
  let tagNome = document.createElement('h3')
  let tagValor = document.createElement('p')

  tagImg.src = imagem
  tagNome.innerText = nome
  tagValor.innerText = `R$ ${valor}`.replace('.', ',')

  divCards.classList.add('card')

  divCards.append(tagFigure, tagNome, tagValor)

  return cardsConteudo
}

/* <div class="card">
<figure></figure>
<h3>Nome</h3>
<p>Valor</p>
</div> */
