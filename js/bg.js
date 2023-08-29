export const React = {

  bgONE : document.querySelector(".img1")
  ,
  bgTWO : document.querySelector(".img2")
  ,
  bgTHREE : document.querySelector(".img3")
  // Tam bem colocar aqui a fontweight bold do nome link clicado
  ,
  img1(){
    this.bgONE.classList.remove('.here');
    this.bgTWO.classList.add('.here');
    this.bgTHREE.classList.add('.here');
  } 
  ,
  img2(){
    this.bgTWO.classList.remove('.here');
    this.bgONE.classList.add('.here');
    this.bgTHREE.classList.add('.here');
  } 
  ,
  img3(){
    this.bgTHREE.classList.remove('.here');
    this.bgTWO.classList.add('.here');
    this.bgONE.classList.add('.here');
  } 
}