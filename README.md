# Criado com Create React App

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

## Clonando e Rodando o App

Para rodar o projeto corretamente, após clonar o repositório, utilize os seguintes comandos:

### `npm install`

Mesmo clonando o repositório, será preciso instalar todas as dependências.
Por isso utilizar o comando acima é essencial para o correto funcionamento.

Depois de instaladas as dependências, basta rodar o programa com:

### `npm start`

Para rodar a aplicação no modo de desenvolvimento!
Será aberta a [http://localhost:3000](http://localhost:3000) para visualizar no browser.

Lembre de abrir o console para checar possíveis erros de clonagem e instalação do repositório.

### `npm test`

Rode o test se desejar. Em caso de dúvidas, descubra mais sobre os testes em [running tests](https://facebook.github.io/create-react-app/docs/running-tests).


## Considerações Sobre o Projeto

### `Fake Api`

O projeto consome a Fake Store API, cuja documentação está presente em [Fake Store API](https://fakestoreapi.com/docs#products).

### `TypeScript`

Foi escolhido o uso do superconjunto de JavaScript para adequação à tarefa, mas também para facilitar
a tipagem estática, a orientação a objetos e a testagem de bugs em tempo real no modo de desenvolvimento.

### `Styled Components`

O projeto utiliza Styled Components em preferência ao CSS primeiro para demonstração de conhecimento e,
em segundo lugar, porque a biblioteca automatiza nomes de classes dinâmicos, remove CSS não utilizado,
facilita a implantação de estilos dinâmicos e, no longo prazo, diminui a dotação orçamentária para
manutenção dos estilos da aplicação.

### `JEST`

Para testes foi escolhido o JEST, disponível apenas no modo desenvolvimento --save-dev.