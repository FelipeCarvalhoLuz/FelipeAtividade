const campoPesquisa = document.querySelector('.barra-pesquisa input');
campoPesquisa.addEventListener('input', (e) => {
  const termoPesquisa = e.target.value.toLowerCase();
});