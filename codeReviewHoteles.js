let arrayReview = JSON.parse(localStorage.getItem("Lista Review"));;

let idHjjotel = JSON.parse(localStorage.getItem("id Hotel Click"));

function imprimirReview(){
    let section = document.getElementById("sect-review");
    section.innerHTML="";
    if(arrayReview === null){
      arrayReview=[];
    }
    else{
      arrayReview.forEach(element => {
        if(element.hotelId === idHjjotel){

          let divReview = document.createElement("div");
          divReview.className="div-review";
          let titleReview = document.createElement("h2");
          titleReview.textContent=element.title;
          let description = document.createElement("p");
          description.textContent=element.description;
 
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