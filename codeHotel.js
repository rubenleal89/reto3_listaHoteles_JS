let cargarHoteles = async()=> {
  try{
    let hoteles = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels");

      let dataHoteles = await hoteles.json();
      dataHoteles.forEach(element => {
        let section = document.getElementById("sect-hoteles");
        let divHotel = document.createElement("div");
        divHotel.className="div-hotel";
        let divImg = document.createElement("div");
        divImg.className="div-img";
        let imgHotel = document.createElement("img");
        imgHotel.src=element.thumbnail;
        let iconFavorito = document.createElement("i")
        iconFavorito.className="fa-regular fa-heart"

        let divDescripcion = document.createElement("div");
        divDescripcion.className="div-descripcion";
        let divTitleRating = document.createElement("div");
        divTitleRating.className="div-title-rating";
        let titleHotel = document.createElement("a");
        titleHotel.addEventListener("click",(e)=>{
          mostrarId(element.id);
        })
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
  catch(error){
    alert(error);
    console.log(error);
  }
}


let mostrarId = async (id)=> {  //Guardar el id del hotel cliqueado
  try{
    let metodo = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "hotelId": id,
      })
      }
    let response = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels",metodo)
      let json = await response.json();
      console.log(response);
      console.log(json);
  }
  catch(error){
    alert(error);
    console.log(error);
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
