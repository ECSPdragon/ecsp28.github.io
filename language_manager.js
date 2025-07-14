//Cookies
//Set language with cookie
function cookie_set_lang(language){
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1209600000); //Make cookie expire in 2 weeks
    let expiry_tag = "expires="+expiry.toUTCString();
    document.cookie = "language=" + language + ";" + expiry_tag + ";path=/";
}

function cookie_get_lang(){
    let cookie = decodeURIComponent(document.cookie);
    let cookie_array = cookie.split(";");
    
    //Loop to find the language cookie entry
    for (let i = 0; i < cookie_array.length; i++){
        let cookie_data = cookie_array[i];
        
        //Erase spaces at the start of an entry
        while (cookie_data.charAt(0) == " "){
            cookie_data = cookie_data.substring(1);
        }
        //Detect language cookie entry and get the value
        if (cookie_data.indexOf("language") == 0){
            return cookie_data.substring(9, cookie_data.length);
        }
    }
    //Return null value if no language cookie entry is found
    return "";
}

//Content change
function load_language(){
    let get_lang = cookie_get_lang();
    switch (get_lang){
        case "":{ //Create cookie
            cookie_set_lang("en");
            break;
        }
        case "en":{ //English
            //do nothing lmfao website's already in english
            const langselector = document.getElementById("langselector-english");
            langselector.style = "color:white;";
            break;
        }
        case "es":{ //Castellano (Español)
            content_set_to_language("es");
            break;
        }
        case "ca":{ //Català
            content_set_to_language("ca");
            break;
        }
    }
}

//Change website to another language
function content_set_to_language(lang){
    switch (lang){
        case "es":{
            //Página principal
            if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
                const langselector = document.getElementById("langselector-spanish");
                langselector.style = "color:white;";

                const index_sidebar_aboutme = document.getElementById("-loc-index-sidebar-aboutme");
                const index_sidebar_portfolio = document.getElementById("-loc-index-sidebar-portfolio");
                const index_sidebar_studioecsp = document.getElementById("-loc-index-sidebar-studioecsp");
                const index_sidebar_blog = document.getElementById("-loc-index-sidebar-blog");
                const index_sidebar_supportme = document.getElementById("-loc-index-sidebar-supportme");

                index_sidebar_aboutme.textContent = "Sobre mí";
                index_sidebar_portfolio.textContent = "Portafolio";
                index_sidebar_studioecsp.textContent = "Studio ECSP";
                index_sidebar_blog.textContent = "Publicaciones";
                index_sidebar_supportme.textContent = "Apoyame";
            }
            
            //Menu Home
            if (window.location.pathname == "/home.html"){
                const home_welcome = document.getElementById("-loc-home-welcome");
                const home_explanation = document.getElementById("-loc-home-explanation");
                const home_disclaimer = document.getElementById("-loc-home-disclaimer");

                home_welcome.textContent = "Bienvenido a ecsp.dev";
                home_explanation.textContent = "Usa la barra de la izquierda para navegar por las páginas del sitio.";
                home_disclaimer.innerHTML = "Al usar ecsp.dev y sus servicios, aceptas<br  />seguir el <a href='https://ecsp.dev/legal/ethics_agreement' target='_blank'>documento de acuerdos éticos</a>.";
            }
            
            //Sobre mí
            if (window.location.pathname == "/about.html"){
                const about_main = document.getElementById("-loc-about-main");
                
                about_main.innerHTML = "Tengo 18 años y soy de Barcelona. Actualmente estoy estudiando para ser programado y diseñador designer y/o artista.<br /><br />¡Quiero expresar mis ideas y manifestar mi pasión creativa por medio de los videojuegos y el arte! He estado trabajando en juegos desde 2020 como hobby, usando los motores GameMaker y Godot para aprender y crear y también soy artista desde 2022 como hobby también, dibujando por diversión con Krita.<br /><br />¡Esta página la he hecho yo solito!. Uso esta página principalmente para enseñar lo que hago, ¡pero si alguna vez tengo tiempo y me apetece, meteré juegos web también!<br /><br />A lo mejor me ves en convenciones sobre videojuegos en Cataluña o España.<br /><br />";
            }
            
            break;
        }
        case "ca":{ //Català
            //Pàgina principal
            if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
                const langselector = document.getElementById("langselector-catalan");
                langselector.style = "color:white;";

                const index_sidebar_aboutme = document.getElementById("-loc-index-sidebar-aboutme");
                const index_sidebar_portfolio = document.getElementById("-loc-index-sidebar-portfolio");
                const index_sidebar_studioecsp = document.getElementById("-loc-index-sidebar-studioecsp");
                const index_sidebar_blog = document.getElementById("-loc-index-sidebar-blog");
                const index_sidebar_supportme = document.getElementById("-loc-index-sidebar-supportme");

                index_sidebar_aboutme.textContent = "Sobre mi";
                index_sidebar_portfolio.textContent = "Dossier";
                index_sidebar_studioecsp.textContent = "Studio ECSP";
                index_sidebar_blog.textContent = "Publicacions";
                index_sidebar_supportme.textContent = "Dona";
            }
            
            //Menu Home
            if (window.location.pathname == "/home.html"){
                const home_welcome = document.getElementById("-loc-home-welcome");
                const home_explanation = document.getElementById("-loc-home-explanation");
                const home_disclaimer = document.getElementById("-loc-home-disclaimer");

                home_welcome.textContent = "Benvingut a ecsp.dev";
                home_explanation.textContent = "Utilitza la barra a l'esquerra per navegar per les pàgines del lloc web.";
                home_disclaimer.innerHTML = "A l'utilitzar ecsp.dev i els seus serveis, acceptes<br  />seguir el <a href='https://ecsp.dev/legal/ethics_agreement' target='_blank'>document d'acords ètics</a>.";
            }
            
            break;
        }
    }
}