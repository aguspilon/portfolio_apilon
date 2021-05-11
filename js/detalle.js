$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id == 1) { //si es proyecto 1
        $("#img-proyecto").attr("src" , "img/1a.png"); 
        $("#nombreProyecto").html("Ballet");
        $("#nombreMateria").html("Fotografía Digital");
        $("#descripcionProyecto").html("Sesión de fotos que realice en taller de fotografía, inspirada en la vida de una niña apasionada por el ballet. ");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "ballet.html");
        
        //pongo el nombre 1
        //pongo la desc 1
    }else

    if (id == 2) { //si es el proyecto2
        $("#img-proyecto").attr("src" , "img/2.png"); 
        $("#nombreProyecto").html("Diseño");
        $("#nombreMateria").html("Tipografía");
        $("#descripcionProyecto").html("En primer lugar tuve el desafío de diseñar tres etiquetas de vino con nombres de tipografías. También, por otro lado diseñe mi perfil, el cual cuenta con curriculum y tarjeta personal.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "tipografia.html");
    }else

    if (id == 3) { //si es el proyecto3
        $("#img-proyecto").attr("src" , "img/4.png"); 
        $("#nombreProyecto").html("Green House");
        $("#nombreMateria").html("Pogramación web 2");
        $("#descripcionProyecto").html("Green House es una web programada en PHP y diseñado en la materia Interfaces Digitales. Este sitio cuenta con un catalogo de plantas y un administrador, el cual permite agregar, eliminar y filtrar datos.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "https://apilon.000webhostapp.com/index.php");
		
	}else

    if (id == 5) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/7.png"); 
        $("#nombreProyecto").html("Bodegas Fripp");
        $("#nombreMateria").html("Proyecto Web");
        $("#descripcionProyecto").html("Diseño y desarrollo de sitio web de la empresa de vinos Bodegas Fripp.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "http://proyectovinosfripp.epizy.com/vinos.html");
		
	}else

    if (id == 6) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/8.png"); 
        $("#nombreProyecto").html("Roma Digital");
        $("#nombreMateria").html("Brochure");
        $("#descripcionProyecto").html("Freelance: Brochure diseñado para la agencia de marketing digital y producción audiovisual Roma Digital. ");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href',  "roma.html");
		
	}else

    if (id == 4) { //si es el proyecto5
        $("#img-proyecto").attr("src" , "img/5.png"); 
        $("#nombreProyecto").html("Tarter Beer");
        $("#nombreMateria").html("Interfaces Digitales");
        $("#descripcionProyecto").html("Totem de cerveza artesanal");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href',  "tarter.html");
		
	}





});

