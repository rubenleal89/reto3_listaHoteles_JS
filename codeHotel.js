let arrayHoteles = [
    {
        "id": 1,
        "title": "Downtown Hotel",
        "thumbnail": "https://picsum.photos/id/369/400/400",
        "rating": "5",
        "description": "Integer at pulvinar risus. Morbi bibendum metus sem, quis rhoncus dui vulputate nec. Maecenas bibendum nisl vel scelerisque volutpat. Quisque convallis, sem ac facilisis malesuada, purus nibh pellentesque risus, nec pretium nisl tortor sed ipsum. In vitae lectus imperdiet, hendrerit velit vitae, condimentum elit. Aenean aliquet at sapien sit amet efficitur. Curabitur condimentum fringilla justo a maximus.",
        "favorito": "false"
      },
      {
        "id": 2,
        "title": "Fairytail castle",
        "thumbnail": "https://picsum.photos/id/1040/400/400",
        "rating": "4",
        "description": "Nulla condimentum urna et nisl fermentum consectetur. Sed nisl tortor, bibendum at neque a, laoreet vulputate urna. Vestibulum ultrices augue id ligula sollicitudin, et sagittis odio posuere. Nunc fermentum libero quis ex aliquam, vel accumsan nisl tristique. Suspendisse vitae rhoncus mauris. Ut rutrum mollis odio, ultrices scelerisque lacus mattis eget. Praesent lorem nibh, tincidunt vel ultricies ac, tempor sed orci. In hac habitasse platea dictumst. Nulla facilisi. Aenean urna augue, fringilla non dui a, auctor fringilla eros. Suspendisse dui mauris, mollis sit amet mi at, venenatis sagittis urna. Pellentesque interdum ex eget tincidunt hendrerit. Nulla facilisi.",
        "favorito": "false"
      },
      {
        "id": 3,
        "title": "Local Bed and Breakfast",
        "thumbnail": "https://picsum.photos/id/437/400/400",
        "rating": "3",
        "description": "Sed vestibulum in enim et consectetur. Cras volutpat sagittis pretium. Sed eget dapibus metus, sit amet laoreet arcu. Praesent gravida odio sed pretium viverra. Suspendisse ornare elit ut purus tristique, tempor accumsan mi eleifend. Integer ultrices velit eu felis dignissim, sed vulputate libero commodo. Donec consequat arcu non consequat sollicitudin.",
        "favorito": "false"
      },
      {
        "id": 4,
        "title": "Huge Hotel",
        "thumbnail": "https://picsum.photos/id/1031/400/400",
        "rating": "1",
        "description": "Nulla condimentum urna et nisl fermentum consectetur. Sed nisl tortor, bibendum at neque a, laoreet vulputate urna. Vestibulum ultrices augue id ligula sollicitudin, et sagittis odio posuere. Nunc fermentum libero quis ex aliquam, vel accumsan nisl tristique. Suspendisse vitae rhoncus mauris. Ut rutrum mollis odio, ultrices scelerisque lacus mattis eget. Praesent lorem nibh, tincidunt vel ultricies ac, tempor sed orci. In hac habitasse platea dictumst. Nulla facilisi. Aenean urna augue, fringilla non dui a, auctor fringilla eros. Suspendisse dui mauris, mollis sit amet mi at, venenatis sagittis urna. Pellentesque interdum ex eget tincidunt hendrerit. Nulla facilisi.",
        "favorito": "false"
      }
]
localStorage.setItem("Lista Hoteles",JSON.stringify(arrayHoteles));

let arrayReview = [
  {
      "id": 1,
      "hotelId": 1,
      "title": "Best holiday ever",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 2,
      "hotelId": 1,
      "title": "Very clean",
      "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
      "rating": 4
    },
    {
      "id": 5,
      "hotelId": 2,
      "title": "Exceeded all expectations",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 6,
      "hotelId": 2,
      "title": "Very clean",
      "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
      "rating": 4
    },
    {
      "id": 8,
      "hotelId": 2,
      "title": "Very clean",
      "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
      "rating": 4
    },
    {
      "id": 9,
      "hotelId": 3,
      "title": "Best holiday ever",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 11,
      "hotelId": 3,
      "title": "Best holiday ever",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 12,
      "hotelId": 3,
      "title": "Very clean",
      "description": "Duis blandit, dolor sed posuere sodales, diam lorem tempor libero, at vestibulum turpis nisl porttitor enim. Cras accumsan felis orci, a sagittis lectus porta ut.",
      "rating": 4
    },
    {
      "id": 18,
      "hotelId": 4,
      "title": "Exceeded all expectations",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 20,
      "hotelId": 4,
      "title": "Exceeded all expectations",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    },
    {
      "id": 22,
      "hotelId": 4,
      "title": "Best holiday ever",
      "description": "Donec a nisi in mi pellentesque placerat vel eu leo. Nulla facilisi. Duis dui nulla, ornare sed efficitur vitae, aliquam vel tortor. Nunc porta varius ex. Donec id porta lacus, ac facilisis nulla. Proin sed felis nec tellus dictum commodo nec quis lorem. Nam ultrices, risus ut maximus ullamcorper, elit tellus tincidunt tortor, eu euismod turpis ipsum et leo.",
      "rating": 5
    }
]
localStorage.setItem("Lista Review",JSON.stringify(arrayReview));

let validarHoteles = false;

function crearElements(){
  let verHoteles;
  if(validarHoteles === true){ // Validar que boton se oprimio e imprimir su array
    verHoteles = JSON.parse(localStorage.getItem("Hoteles Favoritos"));
  }
  else{
    verHoteles = JSON.parse(localStorage.getItem("Lista Hoteles")); // Trae los valores del local
  }
  let section = document.getElementById("sect-hoteles");
  section.innerHTML="";
    if(verHoteles === null){
      verHoteles=[];
    }
    else{
      verHoteles.forEach(element => {
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
        if(element.favorito === "true"){
          imgFavotiro.className="fa-regular fa-heart favorito";
        }
        else{
          imgFavotiro.className="fa-regular fa-heart";
        }
        let divDescripcion = document.createElement("div");
        divDescripcion.className = "div-descripcion"
        let divTitleRating = document.createElement("div");
        divTitleRating.className = "div-title-rating"
        let title = document.createElement("a");
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

      let btnHotelesFavoritos= document.createElement("button");
      btnHotelesFavoritos.className="btn-HtFav";

      if(validarHoteles === true){
        validarHoteles = false;
        btnHotelesFavoritos.textContent="Ver todos los Hoteles"
        btnHotelesFavoritos.addEventListener("click",crearElements);
      }
      else{
        btnHotelesFavoritos.textContent="Hoteles Favoritos"
        btnHotelesFavoritos.addEventListener("click",verHotelesFav);
      }
      let divBtnHtFavorito = document.createElement("div");
      divBtnHtFavorito.className="div-HtFav";
      section.insertAdjacentElement("beforeend",divBtnHtFavorito);
      divBtnHtFavorito.insertAdjacentElement("beforeend",btnHotelesFavoritos);
    }
}

function verHotelesFav(){
  validarHoteles = true;
  let Hoteles = JSON.parse(localStorage.getItem("Lista Hoteles"));
  let hotelesFav = Hoteles.filter(element => element.favorito === "true");
  localStorage.setItem("Hoteles Favoritos",JSON.stringify(hotelesFav));
  console.table(hotelesFav);
  crearElements();
}

function imprimirReview(hotelId){
  let idHotelClick = hotelId;
  localStorage.setItem("id Hotel Click",JSON.stringify(idHotelClick));
}

function hotelFavorito(e, id){
  arrayHoteles.forEach(element => {
    if(element.id===id){
      if(element.favorito === "true"){
        e.className="fa-regular fa-heart";
        element.favorito = "false";
      }
      else{
        e.className="fa-regular fa-heart favorito";
        element.favorito = "true";
      }
      }
    });
    localStorage.setItem("Lista Hoteles",JSON.stringify(arrayHoteles));
}

document.addEventListener('DOMContentLoaded',crearElements); // (DOMContentLoaded) cuando recargue el contenido del DOM vuelva e imprima