const form = document.querySelector('form');
const listaRegistros = document.querySelector('#lista-registros');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = form.nome.value;
  const email = form.email.value;
  const telefone = form.telefone.value;

  const registro = document.createElement('li');
  registro.innerHTML = `<strong>${nome}</strong> - ${email} - ${telefone}`;
  listaRegistros.appendChild(registro);
  limparCampos();
});

function limparCampos() {
  form.nome.value = '';
  form.email.value = '';
  form.telefone.value = '';
}