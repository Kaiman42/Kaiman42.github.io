
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const query = form.querySelector('input').value;

  search(query); 
})