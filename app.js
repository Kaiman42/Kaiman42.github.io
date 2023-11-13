//Sortear sites de A-Z
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

    //Criar lista de sites usando .json
    sites.forEach(site => {

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

      sitesList.appendChild(listItem);
      
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
