$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id == 1) { //si es proyecto 1
        $("#img-proyecto").attr("src" , "img/1a.png"); 
        $("#nombreProyecto").html("Ballet");
        $("#nombreMateria").html("Fotografía Digital");
        $("#descripcionProyecto").html("Sesión de fotos presentadas en el Taller de fotografía. La secuencia está inspirada en la vida de una niña apasionada por el ballet.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "ballet.html");
        
        //pongo el nombre 1
        //pongo la desc 1
    }else

    if (id == 2) { //si es el proyecto2
        $("#img-proyecto").attr("src" , "img/2.png"); 
        $("#nombreProyecto").html("Diseño");
        $("#nombreMateria").html("Tipografía");
        $("#descripcionProyecto").html("Tuve el desafío de diseñar etiquetas de vino con nombres de tipografías. También diseñé mi perfil; con currículum y tarjeta personal.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "tipografia.html");
    }else

    if (id == 3) { //si es el proyecto3
        $("#img-proyecto").attr("src" , "img/4.png"); 
        $("#nombreProyecto").html("Green House");
        $("#nombreMateria").html("Pogramación web 2");
        $("#descripcionProyecto").html("- Green House es una web programada en PHP y diseñada en la materia Interfaces Digitales. Este sitio cuenta con un catálogo de plantas y un administrador que permite agregar, eliminar y filtrar datos.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "https://apilon.000webhostapp.com/index.php");
		
	}else

    if (id == 6) { //si es el proyecto4
        $("#img-proyecto").attr("src" , "img/7.png"); 
        $("#nombreProyecto").html("Bodegas Fripp");
        $("#nombreMateria").html("Proyecto Web");
        $("#descripcionProyecto").html("Diseño y desarrollo de sitio web de la empresa de vinos Bodegas Fripp.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href', "http://proyectovinosfripp.epizy.com/vinos.html");
		
	}else

    if (id == 7) { //si es el proyecto4
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
        $("#descripcionProyecto").html("Tótem de cerveza artesanal. Desarrollé un tótem digital que permite comprar cervezas en un bar. El objetivo es que el usuario pueda gestionar su compra en una cervecería sin tener que esperar ser atendido en una barra.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href',  "tarter.html");
		
	}else

    if (id == 5) { //si es el proyecto5
        $("#img-proyecto").attr("src" , "img/6.png"); 
        $("#nombreProyecto").html("App");
        $("#nombreMateria").html("Interfaces Digitales");
        $("#descripcionProyecto").html("book Zone es una aplicación que ofrece acceso a libros, tareas, exámenes y demás recursos digitales a estudiantes y docentes uruguayos. Es promovida y gestionada por instituciones educativas. Parte de su compromiso es brindar acceso a información y recursos relacionados a diversas áreas.");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href',  "app.html");
		
	}else

    if (id == 8) { //si es el proyecto5
        $("#img-proyecto").attr("src" , "img/9.png"); 
        $("#nombreProyecto").html("MINI cooper");
        $("#nombreMateria").html("Proyecto personal");
        $("#descripcionProyecto").html("Diseño de OnePage en version desktop y mobile");
        $("#entrar").html("Ver Proyecto");
        $('#entrar').attr('href',  "minicooper.html");
		
	}





});

