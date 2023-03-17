import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');


// Passo 1: vamos começar fazendo o fetch para recuperar as informações das pessoas usuárias. Lembre-se que é necessário usar o método .json() depois de receber o retorno da API. Como a API já retorna um array de pessoas, podemos passá-lo diretamente para a função fillUsersSelect, pois ela já está preparada para receber os dados nesse formato:

const USERS_API = 'https://dummyjson.com/users';
//recupera as alterações via fetch, pega apenas a chave users dentro da API
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;

fillUsersSelect(users);
});

usersSelect.addEventListener('change', () => {
  clearPageData();

// Passo 2: o próximo passo é fazer com que toda vez que selecionarmos uma pessoa, a lista de posts dessa pessoa seja carregada. Para isso, vamos precisar do evento de change do user-select.

// O projeto já tem o eventListener adicionado, então vamos usá-lo para fazer nossa requisição. Vamos usar a URL:

// Vamos recuperar o id da pessoa selecionada diretamente pelo value do select. Como já temos o elemento salvo na variável usersSelect, podemos acessar esse valor diretamente com usersSelect.value
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`

// Com a URL configurada corretamente, agora sim podemos fazer nossa requisição:
fetch(POSTS_API)
.then((response) => response.json())
.then((data) => {
  const { posts } = data;
// Passo 3: Repare que a API já retorna para gente um array com os posts da pessoa selecionada. Dessa forma, podemos passar esse array diretamente para a função fillPosts, que é a função responsável por exibir os posts na tela.
  fillPosts(posts);
// função fillPosts funciona da seguinte forma: ela recebe um array de posts e considera o primeiro post como “Post destacado”, ou seja, além do título, o conteúdo desse post também é exibido.
// Os demais posts da lista são exibidos como posts relacionados, ou seja, são exibidos somentes os títulos deles.
// Passo 4: agora que temos todos os posts de pessoa selecionada e sabemos que o “Post destacado” é o primeiro post da lista, podemos pegar os comentários desse post. A URL usada é:

// Veja que vamos precisar do id do primeiro post. Existem algumas forma de fazer isso, mas nesse gabarito vamos usa a desestruturação do array:
  const [featuredPost] = posts;
  const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

// E agora temos tudo o que precisamos para fazer o fetch para a API de comentários:
  return fetch(COMMENTS_API);
// ⚠️ Importante: reparou que estamos usamos um return na linha em que fizemos o fetch? Fazemos isso para poder encadear mais um .then na sequência que já temos. Isso só é possível por que o método fetch retorna uma promise.

// Dessa forma, o retorno da API com os cometários fica assim:
})
.then((res) => res.json())
.then((data) => {
  const { comments } = data;
// Passo 5: com os comentários recebidos, nossa próxima tarefa é usar a função fillFeaturedPostComments para exibir eles na tela:
fillFeaturedPostComments(comments)
// Passo 6: por último, vamos adicionar um tratamento de erros para esse fluxo. Para tratar erros em fluxos assíncronos, podemos usar o .catch ao final do encadeamento:
})
.catch((error) => {
  fillErrorMessage('Erro ao recuperar informações');
  console.log(error.message);
});
});
