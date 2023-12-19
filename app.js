//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let c = document.getElementById("c");
crearBarra(c);
let python = document.getElementById("python");
crearBarra(python);
let prestashop = document.getElementById("prestashop");
crearBarra(prestashop);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let mysql = document.getElementById("mysql");
crearBarra(mysql);
let visual = document.getElementById("visual");
crearBarra(visual);
let code = document.getElementById("code");
crearBarra(code);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 0, intervalHtml);
        },100);
        const intervalC = setInterval(function(){
            pintarBarra(c, 16, 1, intervalC);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 13, 2, intervalPython);
        },100);
        const intervalPrestashop= setInterval(function(){
            pintarBarra(prestashop, 15, 3, intervalPrestashop);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 10, 4, intervalWordpress);
        },100);
        const intervalMysql = setInterval(function(){
            pintarBarra(mysql, 16, 5, intervalMysql);
        },100);
        const intervalVisual = setInterval(function(){
            pintarBarra(visual, 14, 6, intervalVisual);
        },100);
        const intervalCode = setInterval(function(){
            pintarBarra(code, 16, 7, intervalCode);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}