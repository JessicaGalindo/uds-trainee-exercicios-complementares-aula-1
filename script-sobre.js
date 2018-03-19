var imagemAtual = 0;
var imagens = new Array();

imagens[0] = 'Fotos/grafite.jpg';
imagens[1] = 'Fotos/parque do povo.jpg';
imagens[2] = 'Fotos/foto terno.jpg';
imagens[3] = 'Fotos/sesi chef.jpg';

//Aqui apenas adicione mais imagens
function troca(){
  if (imagemAtual < imagens.length-1){
    imagemAtual++;
  }else{
    imagemAtual = 0
  }
  $(".imagem-local").fadeOut(500);
  setTimeout("$('.imagem-local').html('<img src=\""+imagens[imagemAtual]+"\"/>');$('.imagem-local').fadeIn(500);",500);
}
var segundos = 2; //Segundos entre cada imagem
setInterval("troca();",segundos*1000);
