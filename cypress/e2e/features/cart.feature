# language: pt

Funcionalidade: Carrinho de compras
  Como cliente da loja Ebac online
  Quero adicionar um produto desejado no carrinho
  Para depois finalizar a compra

  Cenário: Validar itens do carrinho
    Dado que estou logada
    E adiciono um produto ao carrinho
    Quando abro o carrinho
    Então o nome do produto é exibido
    E o preço unitário é exibido
    E o subtotal é exibido
    E a quantidade do produto é 1
    E o botão de finalizar compra está disponível
