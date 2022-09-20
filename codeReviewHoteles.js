let idHotel = JSON.parse(localStorage.getItem("id Hotel Click"));

let mostrarReview = async ()=> {
  try{
    let review = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews");
    let dataReview = await review.json();

    let section = document.getElementById("sect-review");
    dataReview.forEach(element => {
      if(element.hotelId === idHotel){
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
  catch(error){
    alert(error);
    console.log(error);
  }
}


 crearReview = async (descripcion,rating,title)=> {  //Arreglar
  
  try{
    
    let metodoPost = {
      method: 'POST',
      headers: {       
        "ContentType": "application/json",
      },
      body: JSON.stringify({
        "description" : descripcion,
        "hotelId": 1,
        "id": 1,
        "rating":rating,
        "title":title,
      })
      } 
    let datosReview = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews",metodoPost)
      let respuesta = await datosReview.json();
      console.log(respuesta);
      if(datosReview.status===201){
        alert("sii")
      }
  }
  catch(error){
    alert(error);
    console.log(error);
  }
}

function limpiarFormulario() {
  document.getElementById("formulario").value = '';
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", addReview);

function addReview(e){
  e.preventDefault();
  // debugger
  let title = document.getElementById("inputTitulo").value;
  let description = document.getElementById("textAreaDescripcion").value;
  let rating = document.getElementById("rating").value;
  crearReview(description,rating,title);
  // mostrarReview();
  limpiarFormulario();
}

document.addEventListener('DOMContentLoaded',mostrarReview);