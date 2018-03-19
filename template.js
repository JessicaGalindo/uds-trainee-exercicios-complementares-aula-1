//verifica se o browser contem este tipo de content
if('content' in document.createElement('template')){
  //verifica onde vai introduzir o template
  var itemMenu = document.querySelector('#itemMenu'), li = itemMenu.content.querySelector("li");
  var ul = document.querySelector("ul");

  li.innerHTML = "<a href='home.html'> Home </a>";
  var clone = document.importNode(itemMenu.content, true);
  ul.appendChild(clone);

//li.innerHTML = "<a href='Sobre.html' class='menu-ativo'> Sobre </a>";
//fazer if para deixar selecionado no menu o atual
  li.innerHTML = "<a href='Sobre.html'> Sobre </a>";
  var clone2 = document.importNode(itemMenu.content, true);
  ul.appendChild(clone2);

  li.innerHTML = "<a href='Contato.html'> Contato </a>";
  var clone3 = document.importNode(itemMenu.content, true);
  ul.appendChild(clone3);
}
