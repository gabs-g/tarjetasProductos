const main = document.getElementsByTagName("main").item(0);
let tarjetas = document.getElementById("tarjetas");
const ulMenu =document.getElementById ("ulMenu");
const URLMain = "https://fakestoreapi.com/products/";


function getData(information){
    const options = {method: "GET"};
    fetch(URLMain + information, options)
        .then((response) => {
            response.json().then((res)=>{
                //console.log(res.length);
                //console.log(res[2].title);
                createCard(res)
        });
    })

        .catch((err) => {
                     main.insertAdjacentHTML("beforeend", 
                         `<div class="alert alert-danger" role="alert">
                              ${err.message}
                         </div>`);
                    
   });

}//getData


//Crear tarjetas

function createCard(productos){
    tarjetas.innerText= "";
    productos.forEach(producto => {
    tarjetas.insertAdjacentHTML("beforeend",
        `<div class="card"  style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">${producto.description}</p>
                <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        </div>`
    );

});
}




//get Categorías

function getCategories(){
    const options = {method: "GET"};
    fetch(URLMain + "categories/", options)
        .then((response) => {
            response.json().then((res)=>{
            res.forEach(cat => {
                ulMenu.insertAdjacentHTML("afterbegin",
                    `<li><a class="dropdown-item" onclick = "getData('category/${cat.replace("'","%27")}')">${cat}</a></li>`
                )

            }) 
        });
    })

        .catch((err) => {
                     main.insertAdjacentHTML("beforeend", 
                         `<div class="alert alert-danger" role="alert">
                              ${err.message}
                         </div>`);
                    
   });

}


//getCategories

getCategories();
getData("");
