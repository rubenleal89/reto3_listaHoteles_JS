let validarHoteles = false;
let validarLike = false; // eliminar hoteles al dar dislike
let dataHoteles; // hoteles sacados de la Api
let hotelesFavoritos = []; // hoteles filtrados de favoritos



let apiHoteles = fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels")
.then((response)=> response.json())
.then((data)=> {
  dataHoteles=data
  cargarHoteles();
})
.catch((error)=> console.log(error))

function cargarHoteles(){
  // debugger
  let section = document.getElementById("sect-hoteles");
      section.innerHTML="";

      let verHoteles;
      if(validarHoteles === true){
        verHoteles = hotelesFavoritos;
      }
      else{
        verHoteles = dataHoteles;
        validarLike = false;
      }

      verHoteles.forEach(element => {
        let divHotel = document.createElement("div");
        divHotel.className="div-hotel";
        let divImg = document.createElement("div");
        divImg.className="div-img";
        let imgHotel = document.createElement("img");
        imgHotel.src=element.thumbnail;
        let iconFavorito = document.createElement("i");
        iconFavorito.className="fa-regular fa-heart";
        iconFavorito.addEventListener("click",(e)=>{
          hotelFavorito(iconFavorito,element.id);
        });
        if(element.favorito === "activo"){
          iconFavorito.className="fa-regular fa-heart favorito";
        }
        else{
          iconFavorito.className="fa-regular fa-heart";
        }
        let divDescripcion = document.createElement("div");
        divDescripcion.className="div-descripcion";
        let divTitleRating = document.createElement("div");
        divTitleRating.className="div-title-rating";
        let titleHotel = document.createElement("a");
        titleHotel.href=`reviewHoteles.html?id=${element.id}`;
        titleHotel.className="linkTitle";
        titleHotel.textContent=element.title;
        let descripcion = document.createElement("p");
        descripcion.textContent=element.description;
        
        section.insertAdjacentElement("beforeend",divHotel);
        divHotel.insertAdjacentElement("beforeend",divImg);
        divImg.insertAdjacentElement("beforeend",imgHotel);
        divImg.insertAdjacentElement("beforeend",iconFavorito);
        divHotel.insertAdjacentElement("beforeend",divDescripcion);
        divDescripcion.insertAdjacentElement("beforeend",divTitleRating);
        divTitleRating.insertAdjacentElement("beforeend",titleHotel);
        divDescripcion.insertAdjacentElement("beforeend",descripcion);

        ratingHoteles(element.rating,divTitleRating);
        
      });
      btnCambioFavPrin(section);
}

function ratingHoteles(numRating,divTitleRating){
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

function btnCambioFavPrin(section){
  let btnHotelesFavoritos= document.createElement("button");
  btnHotelesFavoritos.className="btn-HtFav";
  if(validarHoteles === true){
    validarHoteles = false;
    btnHotelesFavoritos.textContent="Ver todos los Hoteles"
    btnHotelesFavoritos.addEventListener("click",cargarHoteles);
  }
  else{
    btnHotelesFavoritos.textContent="Ver Hoteles Favoritos"
    btnHotelesFavoritos.addEventListener("click",verHotelesFav);
  }
  let divBtnHtFavorito = document.createElement("div");
  divBtnHtFavorito.className="div-HtFav";
  section.insertAdjacentElement("beforeend",divBtnHtFavorito);
  divBtnHtFavorito.insertAdjacentElement("beforeend",btnHotelesFavoritos);
}

function verHotelesFav(){
  validarHoteles = true;
  validarLike = true;
  if(hotelesFavoritos.length === 0){
    validarHoteles = false;
    alert("No hay ningun hotel Favorito")
  }
  cargarHoteles();
}

function hotelFavorito(e, id){
  
  dataHoteles.forEach(element => { // recorro todos los hoteles
    if(element.id === id){ // traigo el hotel que tenga el ID del elemento cliqueado
      let hotelFav = dataHoteles.find(element => element.id === id); // TRAIGO la PRIMERA coincidencia del array que cumpla la condicion
      let hotelData = hotelesFavoritos.filter(element => element.id === id); // CREO un ARRAY con el elemento que cumpla la condicion
      // hotelData.favorito = "activo";
      if(hotelData.length === 0){ // si hotelData encuentra el elemento y lo guarda no lo sube al arrayFavoritos
        hotelesFavoritos.push(hotelFav); // y los subo al array de hoteles favoritos
        
      }
      else{
        hotelData.favorito = "inactivo";
        
        let idHotel = hotelData[0].id;
        hotelesFavoritos = hotelesFavoritos.filter(element => element.id !== idHotel);
      }
    }
  });
  pintarCorazones(e,id)
  if(validarLike === true){
    verHotelesFav();
  }
}

function pintarCorazones(e,id){
  
  dataHoteles.forEach(element => {
    if(element.id===id){
      if(element.favorito === "activo"){
        element.favorito = "inactivo";
        e.className="fa-regular fa-heart";
      }
      else{
        element.favorito = "activo";
        e.className="fa-regular fa-heart favorito";
      }
    }
  });
  // hotelesClick = verHoteles;
}