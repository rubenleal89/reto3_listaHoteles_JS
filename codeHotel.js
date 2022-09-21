validarHoteles = false;
let dataHoteles;

let cargarHoteles = async()=> {
  try{
    let hoteles = await fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels`);

      dataHoteles = await hoteles.json();
      let section = document.getElementById("sect-hoteles");
      section.innerHTML="";
      dataHoteles.forEach(element => {
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
  catch(error){
    alert(error);
    console.log(error);
  }
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

function verHotelesFav(e){
  validarHoteles = true;
  alert("funcion verHotelesFav()")
  // cargarHoteles();
}

function hotelFavorito(e, id){
    if(e.className==="fa-regular fa-heart"){
      e.className="fa-regular fa-heart favorito";
    }
    else{
      e.className="fa-regular fa-heart";
    }
}

cargarHoteles();

// let dataHotel = fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels",{
//   method: "POST",
//       headers: {
//         "Content-Type": "application/stringify",
//       },
//       body: JSON.stringify({
//         "description" : "Hotel muy lujoso",
//         "hotelId": 1,
//         "id": 1,
//         "rating":3,
//         "title":"Best holiday ever"
//       })
// })
//.then((response)=>response.json())
//.then((data)=>console.log(data))
