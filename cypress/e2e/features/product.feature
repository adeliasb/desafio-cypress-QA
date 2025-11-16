# language: pt

Funcionalidade: Seleção do Produto
  Para comprar um item
  Como usuário autenticado
  Escolho o produto desejado

  Cenário: Selecionar um produto e adicionar ao carrinho
    Dado que estou logada na plataforma
    E estou na página inicial
    E visualizo a lista de produtos disponível
    Quando seleciono o produto desejado
    E escolho o tamanho do produto
    E escolho a cor do produto
    E seleciono a opção comprar
    Então vejo a mensagem de confirmação de que o produto foi adicionado
    E o botão Ver carrinho é exibido e está habilitado
