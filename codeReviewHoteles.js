let url = window.location.search;
let urlParam = new URLSearchParams(url);
let idUrl = urlParam.get('id');
let idHotel = parseInt(idUrl);


let mostrarReview = async ()=> {
  try{
    let review = await fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews?hotelId=${idHotel}`);
    let dataReview = await review.json();

    let section = document.getElementById("sect-review");
    dataReview.forEach(element => {
      // if(element.hotelId === idHotel){}
        let divReview = document.createElement("div");
        divReview.className="div-review";
        let titleReview = document.createElement("h2");
        titleReview.textContent=element.title;
        let description = document.createElement("p");
        description.textContent=element.description;

        section.insertAdjacentElement("beforeend",divReview);
        divReview.insertAdjacentElement("beforeend",titleReview);
        divReview.insertAdjacentElement("beforeend",description);

        ratingReview(element.rating,divReview)
    });
  }
  catch(error){
    alert(error);
    console.log(error);
  }
}

function ratingReview(numRating,divTitleRating){
  for(i=0; i < 5; i++){
    let ratingEx = document.createElement("i");
    ratingEx.className="fa-solid fa-star";
    if(numRating <= i){
      ratingEx.className="fa-solid fa-star estrallaGris";
      divTitleRating.insertAdjacentElement("beforeend",ratingEx);
    }
    else{
      divTitleRating.insertAdjacentElement("beforeend",ratingEx);
    }
  }
}

let getHoteles = fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels?id=${idHotel}`)
.then((response) => response.json())
.then((data) => {
  imprimirHotel(data);
})

function imprimirHotel(data){
  // let hotelReview = data.filter(element => element.id === idHotel);
  let section = document.getElementById("sect-review");
  data.forEach(element => {
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
    
    ratingReview(element.rating,divTitleRating)
  });
}

 crearReview = async (descripcion,rating,title)=> {
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
      if(datosReview.status===201 || datosReview.status===200){
        let section = document.getElementById("sect-review");
        let divReview = document.createElement("div");
        divReview.className="div-review";
        let titleReview = document.createElement("h2");
        titleReview.textContent=title;
        let description = document.createElement("p");
        description.textContent=descripcion;

        // section.insertAdjacentElement("beforeend",divHotel);
        section.insertAdjacentElement("beforeend",divReview);
        divReview.insertAdjacentElement("beforeend",titleReview);
        divReview.insertAdjacentElement("beforeend",description);

        ratingReview(rating,divReview)
      }
  }
  catch(error){
    alert(error);
    console.log(error);
  }
}

function validaciones(title,description,rating){
  if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(title) && /^\S/.test(description) && /^[0-5]+$/.test(rating) && rating.length === 1){
      crearReview(description,rating,title);
      formulario.reset();
  }
  else {
      alert("Revice que los datos sean correctos");
  }
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", addReview);

function addReview(e){
  e.preventDefault();
  let title = document.getElementById("inputTitulo").value;
  let description = document.getElementById("textAreaDescripcion").value;
  let rating = document.getElementById("rating").value;
  validaciones(title,description,rating)
}

document.addEventListener('DOMContentLoaded',mostrarReview);