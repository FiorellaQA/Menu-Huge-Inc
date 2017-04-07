document.getElementById("toggle").addEventListener("click",function(event){
	event.preventDefault();

	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementsByTagName('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementsByTagName('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
}, false);

/*------------------------------------------------*/
var coders = [{nombre: "Yessenia",foto:"assets/img/students/1.png"},
              {nombre: "Fiorella",foto:"assets/img/students/1.png"},
              {nombre: "Lorem ipsum", foto:"assets/img/students/1.png"}
              ];
var containerd=document.getElementById("containerF");
coders.forEach(function(element,index){     
    for(var prop in element){

      if(prop == "foto"){
        var src = element[prop];
        
        var figure = document.createElement("figure");
        figure.appendChild(createImage(src));


      }

    }
    containerd.appendChild(figure);
});
function createImage(src) {
    var img   = new Image();
    img.src   = src;
  return img; 
}
// var arrayFotos = [];
// arrayFotos.push(createImage("",""));

//       // <div class="contenedor-imagen">
//       //     <figure><img class="img-box" src="assets/img/students/1.png" alt="Fiorella Quispe" style="width: 250px; height: 250px;"></figure>
//       //     <span>Fiorella Quispe</span>
//       // </div>


//   for(var i = 0; i<arrayFotos.length; i++){

//     var divContenedor1 = document.createElement("div"); 
//     divContenedor1.classList.add("contenedor-imagen");

//     var figure = document.createElement("figure");
//     figure.appendChild(arrayFotos[i]);

//     var span = document.createElement("span");
//     var nombre = document.createTextNode("nombree!!!!");
//     span.appendChild(nombre);


//     var divContenedor2 = document.createElement("div"); 
//     var texto = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
//       divContenedor1.classList.add("container");
//       divContenedor2.classList.add("text");
//       divContenedor2.appendChild(texto);
//     divContenedor1.appendChild(array[i]);
//     divContenedor1.appendChild(divContenedor2);
//     document.getElementById("imagenes").appendChild(divContenedor1);


// }

// //Despues de llenar todo el array...
// var images = document.getElementsByTagName("img");
// var i;
// for(i = 0; i < images.length; i++) {
//     images[i].className += " img-box";
// }









