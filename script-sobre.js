var imageCount = 0;
var images = new Array();

images[0] = 'Fotos\grafite.jpg';
images[1] = 'Fotos\parque do povo.jpg';
images[2] = 'Fotos\foto terno.jpg';
images[3] = 'Fotos\sesi chef.jpg';

//Aqui apenas adicione mais imagens
function troca(){
  if (imageCount < images.length-1){
    imageCount++;
  }else{
    imageCount = 0
  }
  $(".imagem-local").fadeOut(500);
  setTimeout("$('.imagem-local').html('<img src=\""+images[imageCount]+"\" width=\"100%\" height=\"100%\" />');$('.imagem-local').fadeIn(500);",500);
}
var segundos = 2; //Segundos entre cada imagem
setInterval("troca();",segundos*1000);
