const main = document.getElementsByTagName("main").item(0);
const URLMain = "https://fakestoreapi.com/products/";


function getData(){
        fetch(URLMain)
        .then((response) => {
            console.log(response);
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

getData();

function createCard(productos){
    productos.forEach(producto => {
    main.insertAdjacentHTML("beforeend",
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
getData();