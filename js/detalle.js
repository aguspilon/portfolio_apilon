$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id == 1) { //si es proyecto 1
        $("#img-proyecto").attr("src" , "img/1.png"); 
        $("#nombreProyecto").html("Ballet");
        $("#nombreMateria").html("Fotografía Digital");
        $("#descripcionProyecto").html("Sesión de fotos que realice en taller de fotografía, inspirado en la vida de una niña apasionada por el ballet.  La sesión de fotos cuenta con seis fotografías en diferentes planos, relatando la bella vida de una niña practicando lo que más le gusta, el ballet.");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "ballet.html");
        
        //pongo el nombre 1
        //pongo la desc 1
    }else

    if (id == 2) { //si es el proyecto2
        $("#img-proyecto").attr("src" , "img/2.png"); 
        $("#nombreProyecto").html("Rediseño");
        $("#nombreMateria").html("Tipografía");
        $("#descripcionProyecto").html("En primer lugar tuve el desafío de diseñar tres etiquetas de vino con nombres de tipografías. Por otro lado la tarea también consiste en realizar un perfil el cual debía crear un curriculum y tarjeta personal.");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "tipografia.html");
    }else

    if (id == 4) { //si es el proyecto3
        $("#img-proyecto").attr("src" , "img/4.png"); 
        $("#nombreProyecto").html("Green House");
        $("#nombreMateria").html("Pogramación web 2");
        $("#descripcionProyecto").html("Green house es un sitio web maquetado en PHP y conjuntamente diseñado en la materia Interfaces Digitales. En primer lugar Green House muestra el producto con funciones de filtración, buscador y catalogo. Luego tenemos un administrador, el cual puede agregar y eliminar datos.");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "https://apilon.000webhostapp.com/index.php");
		
	}else

    if (id == 7) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/7.png"); 
        $("#nombreProyecto").html("Bodegas Fripp");
        $("#nombreMateria").html("Proyecto Web");
        $("#descripcionProyecto").html("Sitio web de Bodegas Fripp, diseñado y maquetado en proyecto web, utilizando html, sass, JQuery. Mi desafío fue emprender la búsqueda de una empresa que aun no cuente con sitio web, hacer una investigación de la marca, diseñar y maquetar uno.");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href', "http://proyectovinosfripp.epizy.com/vinos.html");
		
	}else

    if (id == 8) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/8.png"); 
        $("#nombreProyecto").html("Roma Digital");
        $("#nombreMateria").html("Brochure");
        $("#descripcionProyecto").html("Freelance: Brochure diseñado para la agencia de marketing digital y producción audiovisual Roma Digital. ");
        $("#entrar").html("Entrar");
        $('#entrar').attr('href',  "roma.html");
		
	}











});

