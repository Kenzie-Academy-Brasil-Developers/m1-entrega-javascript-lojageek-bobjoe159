//== LISTA QUE IRÁ RECEBER O OBJETO ==//

let listFigure = []
let listPainting = []

//== FUNÇÕES PRA CRIAR O ITEM COMO OBJETO E COLOCAR EM UM ARRAY ==//

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

//==CRIANDO PRODUTOS ATRAVÉS DA FUNÇÃO CREATEACTION ==//

createActionItem(`assets/img/actions/dragonballpersonagem.jpg`, 'Goku', 15)
createActionItem(
  `https://www.kindpng.com/picc/m/85-858971_sh-figuarts-ssg-vegeta-hd-png-download.png`,
  'Vegeta',
  15
)
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
  `https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzMxOG5TM2VoejVMLmpwZw.jpg`,
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

//== RECEBENDO A TAG ATRAVÉS DA CLASSE DO HTML ==//
let categoriaAction = document.getElementsByClassName('categoriaAction')[0]
let categoriaPaintings =
  document.getElementsByClassName('categoriaPaintings')[0]

//== FUNÇÃO PRA LISTAR PRODUTO POR CATEGORIA ==//

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

//== LISTANDO PRODUTOS PASSANDO OS PARÂMETROS CORRETOS ==//

listarProduto(listFigure, categoriaAction)
listarProduto(listPainting, categoriaPaintings)

//== CRIANDO O PRODUTO PARA APARECER NA TELA DO USUÁRIO POR CATEGORIA ACTION ==//

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

  //==ADICIONANDO A CLASSE COM A ESTILIZAÇÃO==//
  divCards.classList.add('card')
  divCards.append(tagFigure, tagNome, tagValor)

  return cardsConteudo
}

//== CRIANDO O PRODUTO PARA APARECER NA TELA DO USUÁRIO POR CATEGORIA PAINT ==//

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

  //==ADICIONANDO A CLASSE COM A ESTILIZAÇÃO==//
  divCards.classList.add('card')
  divCards.append(tagFigure, tagNome, tagValor)

  return cardsConteudo
}
