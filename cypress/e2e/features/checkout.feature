# language: pt

Funcionalidade: Checkout
  Como cliente da loja Ebac online
  Quero preencher meus dados e avançar com o pagamento
  Para finalizar minha compra de forma correta

  Cenário: Validar fluxo completo de checkout
    Dado que concluo a compra do produto que está no carrinho
    E estou no checkout
    E preencho o formulário de faturamento que é exibido
    E confiro as informações do pedido
    E seleciono a forma de pagamento
    E concordo com os termos e condições
    Quando finalizo a compra
    Então vejo os detalhes do pedido exibidos
    E vejo uma mensagem informando que o pedido foi recebido

