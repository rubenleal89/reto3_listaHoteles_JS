let arrayReview = JSON.parse(localStorage.getItem("Lista Review"));
let arrayHotel = JSON.parse(localStorage.getItem("Lista Hoteles"));
let idHjjotel = JSON.parse(localStorage.getItem("id Hotel Click"));
let validarHotelFav = false;

let hotelReview = arrayHotel.filter(element => element.id === idHjjotel);

function imprimirReview(){
    let section = document.getElementById("sect-review");
    section.innerHTML="";
    if(arrayReview === null){
      arrayReview=[];
    }
    else{
      imprimirHotel();
      arrayReview.forEach(element => {
        if(element.hotelId === idHjjotel){
          // let divHotel = document.createElement("div");
          let divReview = document.createElement("div");
          divReview.className="div-review";
          let titleReview = document.createElement("h2");
          titleReview.textContent=element.title;
          let description = document.createElement("p");
          description.textContent=element.description;
 
          // section.insertAdjacentElement("beforeend",divHotel);
          section.insertAdjacentElement("beforeend",divReview);
          divReview.insertAdjacentElement("beforeend",titleReview);
          divReview.insertAdjacentElement("beforeend",description);

          for(i=0; i <  element.rating; i++){
            let rating = document.createElement("i");
            rating.className="fa-solid fa-star";
            divReview.insertAdjacentElement("beforeend",rating);
          }
          for(j=0; j < (5 - element.rating); j++){
            let rating = document.createElement("i");
            rating.className="fa-solid fa-star estrallaGris";
            divReview.insertAdjacentElement("beforeend",rating);
          }
        }
      });
    }
}

function imprimirHotel(){
  let section = document.getElementById("sect-review");

    hotelReview.forEach(element => {
        let divHotel = document.createElement("div");
        divHotel.className="div-hotel"
        let divImg = document.createElement("div");
        divImg.className = "div-img";
        let img = document.createElement("img");
        img.src=element.thumbnail;
        let imgFavotiro = document.createElement("i");
        imgFavotiro.className="fa-regular fa-heart";
        imgFavotiro.addEventListener("click",(e)=>{
          hotelFavorito(imgFavotiro,element.id);
        });
        // if(element.favorito === "true"){
        //   imgFavotiro.className="fa-regular fa-heart favorito";
        // }
        // else{
        //   imgFavotiro.className="fa-regular fa-heart";
        // }
        let divDescripcion = document.createElement("div");
        divDescripcion.className = "div-descripcion"
        let divTitleRating = document.createElement("div");
        divTitleRating.className = "div-title-rating"
        let title = document.createElement("h2");
        title.addEventListener("click",(e)=>{
          imprimirReview(element.id)
        });
        title.className="linkTitle";
        title.setAttribute("href","reviewHoteles.html");
        title.textContent=element.title;
        let description = document.createElement("p");
        description.textContent = element.description;

// Insercciones de elementos a la seccion
      section.insertAdjacentElement("beforeend",divHotel);
      divHotel.insertAdjacentElement("beforeend",divImg);
      divImg.insertAdjacentElement("beforeend",img);
      divImg.insertAdjacentElement("beforeend",imgFavotiro)
      divHotel.insertAdjacentElement("beforeend",divDescripcion);
      divDescripcion.insertAdjacentElement("beforeend",divTitleRating);
      divTitleRating.insertAdjacentElement("beforeend",title);
      divDescripcion.insertAdjacentElement("beforeend",description );
      
      let estrellasGris = 5 - element.rating;
      for(i=0; i <  element.rating; i++){
        let rating = document.createElement("i");
        rating.className="fa-solid fa-star";
        divTitleRating.insertAdjacentElement("beforeend",rating);
      }
      for(j=0; j<estrellasGris; j++){
        let rating = document.createElement("i");
        rating.className="fa-solid fa-star estrallaGris";
        divTitleRating.insertAdjacentElement("beforeend",rating);
      }
    });
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", addReview);

// function idArrayReview(){
//   let id = arrayReview.filter(element => element.id === idHjjotel);
//   console.log(id);
// }

function addElemenArray(title,description,rating){
  let review ={
    "id": 1,
    "hotelId": idHjjotel,
    "title": title,
    "description": description,
    "rating": rating
  }
  arrayReview.push(review);
}

function limpiarFormulario() {
  document.getElementById("formulario").value = '';
}

function addReview(e){
  e.preventDefault();
  let title = document.getElementById("inputTitulo").value;
  let description = document.getElementById("textAreaDescripcion").value;
  let rating = document.getElementById("rating").value;
  addElemenArray(title,description,rating);
  imprimirReview();
  limpiarFormulario();
  localStorage.setItem("Lista Review",JSON.stringify(arrayReview));
}

document.addEventListener('DOMContentLoaded',imprimirReview);