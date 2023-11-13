const sitesList = document.getElementById('sitesList');
const filteredList = document.getElementById('filteredList');
const searchInput = document.getElementById('searchInput');
const form = document.querySelector('form');

function createListItem(site, list) {
  const listItem = document.createElement('li');

  const siteName = document.createElement('h3');
  siteName.textContent = site.name;
  siteName.addEventListener('click', function() {
    window.location.href = site.url;
  });

  const siteDesc = document.createElement('p');
  siteDesc.textContent = site.desc;
  siteDesc.addEventListener('click', function() {
    window.location.href = site.url;
  });

  listItem.appendChild(siteName);
  listItem.appendChild(siteDesc);

  list.appendChild(listItem);
}

fetch('sites.json')
  .then(response => response.json())
  .then(data => {
    const sites = data;
    sites.sort((a, b) => {
      const siteA = a.name.toUpperCase();
      const siteB = b.name.toUpperCase();

      if (siteA < siteB) {
        return -1;
      }

      if (siteA > siteB) {
        return 1;
      }

      return 0;
    });

    sites.forEach(site => {
      createListItem(site, sitesList);
    });

    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
    
      const filtered = sites.filter(site => site.name.toLowerCase().startsWith(searchTerm) && /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-\s]+$/g.test(site.name));
    
      while (sitesList.firstChild) {
        sitesList.removeChild(sitesList.firstChild);
      }
    
      while (filteredList.firstChild) {
        filteredList.removeChild(filteredList.firstChild);
      }
    
      if (searchTerm === '') {
        sites.forEach(site => {
          createListItem(site, sitesList);
        });
      } else {
        filtered.forEach(site => {
          createListItem(site, sitesList);
        });
      }
    });
    

  })
  .catch(error => {
    console.error(error);
  });


 /*  //Fechar cabeçalho
  window.onload = function() {

    var header = document.getElementsByClassName('header');
    var button = document.getElementById('closeBtn');

    button.addEventListener('click', function() {
        
        header.classList.add('closed');
    });
}; */
