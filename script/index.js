const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    // trocar botão selecionado
    document.querySelector('.botao.selecionado')?.classList.remove('selecionado');
    botao.classList.add('selecionado');

    // trocar personagem visível
    document.querySelector('.personagem.selecionado')?.classList.remove('selecionado');
    personagens[indice]?.classList.add('selecionado');
  });
});
