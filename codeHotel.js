let validarHoteles = false;

let cargarHoteles = async()=> {
  try{
    let hoteles = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels");

      let dataHoteles = await hoteles.json();
      let imprimirHotel="";
      dataHoteles.forEach(element => {
        imprimirHotel += `
        <div class="div-hotel">
            <div class="div-img">
                <img src="${element.thumbnail}" alt="${element.title}">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="div-descripcion">
                <div class="div-title-rating">
                    <a class="linkTitle" href="reviewHoteles.html">${element.title}</a>
                    ${verRating(element.rating)}
                </div>
                <p>${element.description}</p>
            </div>
        </div>
        `
      });
      document.getElementById("sect-hoteles").innerHTML = imprimirHotel;
  }
  catch(error){
    alert(error)
  }

function verRating(rating){
  let imprimirRating = "";
  for(i=0; i < rating; i++){
    imprimirRating += `
        <i class="fa-solid fa-star"></i>
      `
  }
  for(j=0; j< (5-rating); j++){
    imprimirRating += `
        <i class="fa-solid fa-star estrallaGris"></i>
      `
  }
  return imprimirRating;
}


  let hoteles = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels");
  let data = await hoteles.json();
  let hotel = data[0]
  console.log(data);
}

let cargarReview = async()=> {
  let hoteles = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews");
  let data = await hoteles.json();
  console.log(data);
}

cargarHoteles();
cargarReview();

// function crearElements(){
//   let verHoteles;
//   if(validarHoteles === true){
//     // verHoteles = JSON.parse(localStorage.getItem("Hoteles Favoritos"));
//   }
//   else{
//     // verHoteles = JSON.parse(localStorage.getItem("Lista Hoteles"));
//   }
//   let section = document.getElementById("sect-hoteles");
//   section.innerHTML="";
//     if(verHoteles === null){
//       verHoteles=[];
//     }
//     else{
//       verHoteles.forEach(element => {
//         let divHotel = document.createElement("div");
//         divHotel.className="div-hotel"
//         let divImg = document.createElement("div");
//         divImg.className = "div-img";
//         let img = document.createElement("img");
//         img.src=element.thumbnail;
//         let imgFavotiro = document.createElement("i");
//         imgFavotiro.className="fa-regular fa-heart";
//         imgFavotiro.addEventListener("click",(e)=>{
//           hotelFavorito(imgFavotiro,element.id);
//         });
//         if(element.favorito === "true"){
//           imgFavotiro.className="fa-regular fa-heart favorito";
//         }
//         else{
//           imgFavotiro.className="fa-regular fa-heart";
//         }
//         let divDescripcion = document.createElement("div");
//         divDescripcion.className = "div-descripcion"
//         let divTitleRating = document.createElement("div");
//         divTitleRating.className = "div-title-rating"
//         let title = document.createElement("a");
//         title.addEventListener("click",(e)=>{
//           imprimirReview(element.id)
//         });
//         title.className="linkTitle";
//         title.setAttribute("href","reviewHoteles.html");
//         title.textContent=element.title;
//         let description = document.createElement("p");
//         description.textContent = element.description;

// // Insercciones de elementos a la seccion
//       section.insertAdjacentElement("beforeend",divHotel);
//       divHotel.insertAdjacentElement("beforeend",divImg);
//       divImg.insertAdjacentElement("beforeend",img);
//       divImg.insertAdjacentElement("beforeend",imgFavotiro)
//       divHotel.insertAdjacentElement("beforeend",divDescripcion);
//       divDescripcion.insertAdjacentElement("beforeend",divTitleRating);
//       divTitleRating.insertAdjacentElement("beforeend",title);
//       divDescripcion.insertAdjacentElement("beforeend",description );
      
//       let estrellasGris = 5 - element.rating;
//       for(i=0; i <  element.rating; i++){
//         let rating = document.createElement("i");
//         rating.className="fa-solid fa-star";
//         divTitleRating.insertAdjacentElement("beforeend",rating);
//       }
//       for(j=0; j<estrellasGris; j++){
//         let rating = document.createElement("i");
//         rating.className="fa-solid fa-star estrallaGris";
//         divTitleRating.insertAdjacentElement("beforeend",rating);
//       }
//       });

//       let btnHotelesFavoritos= document.createElement("button");
//       btnHotelesFavoritos.className="btn-HtFav";

//       if(validarHoteles === true){
//         validarHoteles = false;
//         btnHotelesFavoritos.textContent="Ver todos los Hoteles"
//         btnHotelesFavoritos.addEventListener("click",crearElements);
//       }
//       else{
//         btnHotelesFavoritos.textContent="Hoteles Favoritos"
//         btnHotelesFavoritos.addEventListener("click",verHotelesFav);
//       }
//       let divBtnHtFavorito = document.createElement("div");
//       divBtnHtFavorito.className="div-HtFav";
//       section.insertAdjacentElement("beforeend",divBtnHtFavorito);
//       divBtnHtFavorito.insertAdjacentElement("beforeend",btnHotelesFavoritos);
//     }
// }

// function verHotelesFav(){
//   validarHoteles = true;
//   // let Hoteles = JSON.parse(localStorage.getItem("Lista Hoteles"));
//   let hotelesFav = Hoteles.filter(element => element.favorito === "true");
//   // localStorage.setItem("Hoteles Favoritos",JSON.stringify(hotelesFav));
//   console.table(hotelesFav);
//   crearElements();
// }

// function imprimirReview(hotelId){
//   let idHotelClick = hotelId;
//   // localStorage.setItem("id Hotel Click",JSON.stringify(idHotelClick));
// }

// function hotelFavorito(e, id){
//   arrayHoteles.forEach(element => {
//     if(element.id===id){
//       if(element.favorito === "true"){
//         e.className="fa-regular fa-heart";
//         element.favorito = "false";
//       }
//       else{
//         e.className="fa-regular fa-heart favorito";
//         element.favorito = "true";
//       }
//       }
//     });
//     // localStorage.setItem("Lista Hoteles",JSON.stringify(arrayHoteles));
// }

// document.addEventListener('DOMContentLoaded',crearElements); // (DOMContentLoaded) cuando recargue el contenido del DOM vuelva e imprima