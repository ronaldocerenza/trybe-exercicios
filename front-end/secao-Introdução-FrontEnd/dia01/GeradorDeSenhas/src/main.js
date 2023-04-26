import { nanoid } from "nanoid";
import './style.css';
import copy from "clipboard-copy";

const passwordBtnEl = document.querySelector('button'); //pega o botão
const displayPasswordEl = document.querySelector('h2'); //pega o local onde será impresso o password
//cria um evento para o clique no botão
passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
//cria um evento copiar o codigo gerado
displayPasswordEl.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
