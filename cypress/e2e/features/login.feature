# language: pt

Funcionalidade: Login de usuário
  Como cliente da loja Ebac online
  Eu quero me autenticar
  Para acessar os dados da minha conta

  Cenário: Login com credenciais válidas
    Dado que eu estou na página de login
    Quando eu faço login com credenciais válidas
    Então eu vejo uma mensagem de boas vindas com o meu e-mail
    E vejo a mensagem de boas-vindas ao usuário no topo da página 
    E também visualizo o painel da minha conta 