const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const query = form.querySelector('input').value;
  
  // faz a pesquisa aqui
  search(query); 
})