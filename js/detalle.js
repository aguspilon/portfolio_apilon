$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id == 1) { //si es proyecto 1
        $("#img-proyecto").attr("src" , "img/1.png"); 
        $("#nombreProyecto").html("Ballet");
        $("#nombreMateria").html("Fotografía Digital");
        $("#descripcionProyecto").html("Sesion de fotos que realice en taller de fotografía inspirado en la vida de una niña apasionada por el ballet");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "ballet.html");
        
        //pongo el nombre 1
        //pongo la desc 1
    }else

    if (id == 2) { //si es el proyecto2
        $("#img-proyecto").attr("src" , "img/2.png"); 
        $("#nombreProyecto").html("Rediseño");
        $("#nombreMateria").html("Tipografía");
        $("#descripcionProyecto").html("Rediseño de perfil y vinos con tipografía");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "tipografia.html");
    }else

    if (id == 4) { //si es el proyecto3
        $("#img-proyecto").attr("src" , "img/4.png"); 
        $("#nombreProyecto").html("Green House");
        $("#nombreMateria").html("Pogramación web 2");
        $("#descripcionProyecto").html("lorem impsum is dolor");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "https://apilon.000webhostapp.com/index.php");
		
	}else

    if (id == 7) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/7.png"); 
        $("#nombreProyecto").html("Bodegas Fripp");
        $("#nombreMateria").html("Proyecto Web");
        $("#descripcionProyecto").html("lorem impsum is dolor");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "http://proyectovinosfripp.epizy.com/vinos.html");
		
	}
    











});

