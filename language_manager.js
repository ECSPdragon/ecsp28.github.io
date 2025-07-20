//Cookies
//Set language with cookie
function cookie_set_lang(language){
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + 1209600000); //Make cookie expire in 2 weeks
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
            content_set_to_language("en");
            //Refresh cookie
            cookie_set_lang("en");
            break;
        }
        case "es":{ //Castellano (Español)
            content_set_to_language("es");
            //Refresh cookie
            cookie_set_lang("es");
            break;
        }
        case "ca":{ //Català
            content_set_to_language("ca");
            //Refresh cookie
            cookie_set_lang("ca");
            break;
        }
    }
}

//Change website to another language
function content_set_to_language(lang){
    switch (lang){
        case "en":{ //English
            //Main page
            if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
                const langselector_eng = document.getElementById("langselector-english");
                const langselector_esp = document.getElementById("langselector-spanish");
                const langselector_cat = document.getElementById("langselector-catalan");
                langselector_eng.style = "color:white;";
                langselector_esp.style = "color:#9b9b9b;";
                langselector_cat.style = "color:#9b9b9b;";

                const index_sidebar_aboutme = document.getElementById("-loc-index-sidebar-aboutme");
                const index_sidebar_portfolio = document.getElementById("-loc-index-sidebar-portfolio");
                const index_sidebar_studioecsp = document.getElementById("-loc-index-sidebar-studioecsp");
                const index_sidebar_blog = document.getElementById("-loc-index-sidebar-blog");
                const index_sidebar_supportme = document.getElementById("-loc-index-sidebar-supportme");

                index_sidebar_aboutme.textContent = "About me";
                index_sidebar_portfolio.textContent = "Portfolio";
                index_sidebar_studioecsp.textContent = "Studio ECSP";
                index_sidebar_blog.textContent = "Entries";
                index_sidebar_supportme.textContent = "Support me";
            }
            
            //Home
            if (window.location.pathname == "/home.html"){
                const home_welcome = document.getElementById("-loc-home-welcome");
                const home_explanation = document.getElementById("-loc-home-explanation");
                const home_disclaimer = document.getElementById("-loc-home-disclaimer");

                home_welcome.textContent = "Welcome to ecsp.dev";
                home_explanation.textContent = "Use the bar on the left to navigate through the different pages of the site.";
                home_disclaimer.innerHTML = "By using ecsp.dev and its services, you're<br  />agreeing to follow the <a href='https://ecsp.dev/legal/ethics_agreement' target='_blank'>ethics agreement</a>.";
            }
            
            //About me
            if (window.location.pathname == "/about.html"){
                const about_main = document.getElementById("-loc-about-main");
                
                const about_title_games = document.getElementById("-loc-about-title-games");
                const about_title_art = document.getElementById("-loc-about-title-art");
                const about_title_3d = document.getElementById("-loc-about-title-3d");
                const about_title_music = document.getElementById("-loc-about-title-music");
                const about_title_other = document.getElementById("-loc-about-title-other");
                
                const about_desc_games = document.getElementById("-loc-about-desc-games");
                const about_desc_art = document.getElementById("-loc-about-desc-art");
                const about_desc_3d = document.getElementById("-loc-about-desc-3d");
                const about_desc_music = document.getElementById("-loc-about-desc-music");
                const about_desc_other1 = document.getElementById("-loc-about-desc-other1");
                const about_desc_other2 = document.getElementById("-loc-about-desc-other2");
                
                about_main.innerHTML = "I'm 18 and from Barcelona, Spain. I am currently studying to become a game programmer, game designer and/or artist.<br /><br />I want to bring my ideas to life and to express my creative passion through videogames and art! I've been a hobbyist game developer since 2020, using the GameMaker and Godot engines to learn and create and a hobbyist artist since 2022. Very recently, I also started producing electronic music recently as IsabelleDragon, updates soon :3<br /><br />I built this website myself! I don't have a lot of experience when it comes to building websites, but it looks great to me. I use this website mainly as a portfolio, but I also want to put web games that I make here!<br /><br />You might see me at  videogame or gamedev related events and conventions around Catalonia or Spain!<br /><br />";
                
                about_title_games.textContent = "GAMES";
                about_title_art.textContent = "DIGITAL ART";
                about_title_3d.textContent = "3D MODELS";
                about_title_music.textContent = "MUSIC";
                about_title_other.textContent = "OTHER STUFF I DO RARELY";
                
                about_desc_games.innerHTML = "I've been interested in making games since fifth grade, but I haven't been able to actually make any serious projects until recently with HIThit.<br  />I've mastered Gamemaker and I'm in the process of learning to use Godot Engine.<br  />I make games under the alias \"Studio ECSP\" and I work on those projects with other people!";
                about_desc_art.innerHTML = 'My favorite kinds of art to do are concept art, dragons, lizards and heavily stylized stuff. I love anything Art Deco, Neon or just plain fancy.<br  />I use an <a style="color:lightgray;" target="_blank" href="https://www.xp-pen.com/product/artist-16-2nd-gen.html">XP-PEN Artist 16" Drawing Tablet.</a> See my art <a style="color:lightgray;" target="_self" href="https://ecsp.dev/art">here!</a>';
                about_desc_3d.textContent = 'I like doing low-poly and stylized modeling using Blender and Blockbench.';
                about_desc_music.innerHTML = 'I\'ve started experimenting with electronic music recently and want to do a five song EP this summer, updates soon!<br  />My biggest inspirations are <a style="color:lightgray;" href="https://incrediblepolo.bandcamp.com/album/ages" target="_blank">Incredible Polo</a>, <a style="color:lightgray;" href="https://mildhighclub.bandcamp.com/album/skiptracing" target="_blank">Mild High Club</a>, <a style="color:lightgray;" href="https://soundcloud.com/porter-robinson" target="_blank">Porter Robinson</a>, <a style="color:lightgray;" href="https://songs4lizards.bandcamp.com/album/pom-pom-guillotine" target="_blank">Lizzy\'s personal army</a> and <a style="color:lightgray;" href="https://snuffles.bandcamp.com/" target="_blank">snuffles.</a>';
                about_desc_other1.textContent = 'Graphic design';
                about_desc_other2.textContent = 'Random Coding Projects (like this website!)';
            }
            
            //Portfolio
            if (window.location.pathname == "/art.html"){
                const art_banner_title = document.getElementById('-loc-art-banner-title');
                const art_banner_desc = document.getElementById('-loc-art-banner-desc');
                
                const art_1_title = document.getElementById('-loc-art-1-title');
                const art_1_desc = document.getElementById('-loc-art-1-desc');
                const art_2_title = document.getElementById('-loc-art-2-title');
                const art_2_desc = document.getElementById('-loc-art-2-desc');
                const art_3_title = document.getElementById('-loc-art-3-title');
                const art_3_desc = document.getElementById('-loc-art-3-desc');
                const art_4_title = document.getElementById('-loc-art-4-title');
                const art_4_desc = document.getElementById('-loc-art-4-desc');
                const art_5_title = document.getElementById('-loc-art-5-title');
                const art_5_desc = document.getElementById('-loc-art-5-desc');
                
                art_banner_title.textContent = "THE ART OF ECSP";
                art_banner_desc.innerHTML = "Here is what I've drawn over the years. Includes concept art, regular drawings and 3D models.<br  /><br  />Click an image to expand it!";
                
                art_1_title.textContent = "HIThit";
                art_1_desc.textContent = "A work-in-progress game project and final school project! It's a turn-based rhythm fighting game with Rhythm Heaven-esque battles.";
                art_2_title.textContent = "ECSPdragon";
                art_2_desc.textContent = "The website dragon! A low-poly, digital creature that lives inside digital devices.";
                art_3_title.textContent = "Browser games";
                art_3_desc.textContent = "I rarely make art for my simpler browser games.";
                art_4_title.textContent = "3D Models";
                art_4_desc.textContent = "Stuff I've made in Blender and Blockbench.";
                art_5_title.textContent = "other stuff idk";
                art_5_desc.textContent = "emotes, shitposts... allat";
            }
            
            break;
        }
        case "es":{
            //Página principal
            if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
                const langselector_eng = document.getElementById("langselector-english");
                const langselector_esp = document.getElementById("langselector-spanish");
                const langselector_cat = document.getElementById("langselector-catalan");
                langselector_eng.style = "color:#9b9b9b;";
                langselector_esp.style = "color:white;";
                langselector_cat.style = "color:#9b9b9b;";

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
                
                const about_title_games = document.getElementById("-loc-about-title-games");
                const about_title_art = document.getElementById("-loc-about-title-art");
                const about_title_3d = document.getElementById("-loc-about-title-3d");
                const about_title_music = document.getElementById("-loc-about-title-music");
                const about_title_other = document.getElementById("-loc-about-title-other");
                
                const about_desc_games = document.getElementById("-loc-about-desc-games");
                const about_desc_art = document.getElementById("-loc-about-desc-art");
                const about_desc_3d = document.getElementById("-loc-about-desc-3d");
                const about_desc_music = document.getElementById("-loc-about-desc-music");
                const about_desc_other1 = document.getElementById("-loc-about-desc-other1");
                const about_desc_other2 = document.getElementById("-loc-about-desc-other2");
                
                about_main.innerHTML = "Tengo 18 años y soy de Barcelona. Actualmente, estoy estudiando para ser programador y diseñador de videojuegos o artista.<br /><br />¡Quiero expresar mis ideas y manifestar mi pasión creativa por medio de los videojuegos y el arte! He estado trabajando en juegos desde 2020 como hobby, usando los motores GameMaker y Godot para aprender y crear. También soy artista desde 2022 como hobby, dibujando con Krita. Recientemente. también he empezado a hacer música electrónica, ya diré cosas cuando produzca mi EP :)<br /><br />¡Esta página la he hecho yo solito!. Uso esta página principalmente para enseñar lo que hago, ¡pero si alguna vez tengo tiempo y me apetece, meteré juegos web también!<br /><br />A lo mejor me ves en convenciones de videojuegos en Cataluña o España.<br /><br />";
                
                about_title_games.textContent = "VIDEOJUEGOS";
                about_title_art.textContent = "ARTE DIGITAL";
                about_title_3d.textContent = "MODELADO 3D";
                about_title_music.textContent = "MÚSICA";
                about_title_other.textContent = "OTRAS COSAS QUE HAGO A VECES";
                
                about_desc_games.innerHTML = "Me ha interesado hacer videojuegos desde quinto de primaria, pero no he podido hacer ningún proyecto serio hasta ahora con HIThit.<br  />Tengo 5 años de experiencia con el motor GameMaker y ahora estoy aprendiendo también el motor Godot.<br  />¡Trabajo en videojuegos bajo el alias \"Studio ECSP\" con otra gente!";
                about_desc_art.innerHTML = 'Me gusta dibujar arte conceptual, dragones, reptiles y cosas con mucha estilización. Me encanta el Art Déco, lo Neon o lo estilizado a secas.<br  />Uso una <a style="color:lightgray;" target="_blank" href="https://www.xp-pen.com/product/artist-16-2nd-gen.html">Tableta de dibujo XP-PEN Artist 16".</a> ¡Puedes ver lo que dibujo <a style="color:lightgray;" target="_self" href="https://ecsp.dev/art">aquí!</a>';
                about_desc_3d.textContent = 'Me gusta hacer modelaje low-poly y estilizado con Blender y Blockbench.';
                about_desc_music.innerHTML = 'He comenzado hace muy poco a experimentar con hacer música electrónica, quiero hacer un EP este verano, ya iré diciendo cosas cuando tenga algo :)<br  />Mis inspiraciones más grandes son <a style="color:lightgray;" href="https://incrediblepolo.bandcamp.com/album/ages" target="_blank">Incredible Polo</a>, <a style="color:lightgray;" href="https://mildhighclub.bandcamp.com/album/skiptracing" target="_blank">Mild High Club</a>, <a style="color:lightgray;" href="https://soundcloud.com/porter-robinson" target="_blank">Porter Robinson</a>, <a style="color:lightgray;" href="https://songs4lizards.bandcamp.com/album/pom-pom-guillotine" target="_blank">Lizzy\'s personal army</a> y <a style="color:lightgray;" href="https://snuffles.bandcamp.com/" target="_blank">snuffles.</a>';
                about_desc_other1.textContent = 'Diseño gráfico';
                about_desc_other2.textContent = 'Proyectos de programación (¡como esta página web!)';
            }
            
            //Portafolio
            if (window.location.pathname == "/art.html"){
                const art_banner_title = document.getElementById('-loc-art-banner-title');
                const art_banner_desc = document.getElementById('-loc-art-banner-desc');
                
                const art_1_title = document.getElementById('-loc-art-1-title');
                const art_1_desc = document.getElementById('-loc-art-1-desc');
                const art_2_title = document.getElementById('-loc-art-2-title');
                const art_2_desc = document.getElementById('-loc-art-2-desc');
                const art_3_title = document.getElementById('-loc-art-3-title');
                const art_3_desc = document.getElementById('-loc-art-3-desc');
                const art_4_title = document.getElementById('-loc-art-4-title');
                const art_4_desc = document.getElementById('-loc-art-4-desc');
                const art_5_title = document.getElementById('-loc-art-5-title');
                const art_5_desc = document.getElementById('-loc-art-5-desc');
                
                art_banner_title.textContent = "EL ARTE DE ECSP";
                art_banner_desc.innerHTML = "Aquí está todo lo que he hecho desde 2022. Incluye arte conceptual, dibujos normales y modelos 3D.<br  /><br  />¡Haz clic en una imagen para expandirla!";
                
                art_1_title.textContent = "HIThit";
                art_1_desc.textContent = "El juego en el que estoy trabajando actualmente y mi proyecto de final de grado medio. Este es un juego de peleas y ritmo por turnos con un gameplay a lo Rhythm Paradise.";
                art_2_title.textContent = "ECSPdragón";
                art_2_desc.textContent = "¡La mascota de la página! Este es un dragón low-poly y digital que vive dentro de dispositivos digitales.";
                art_3_title.textContent = "Juegos de navegador";
                art_3_desc.textContent = "Apenas hago arte conceptual de mis juegos simples de navegador.";
                art_4_title.textContent = "Modelos 3D";
                art_4_desc.textContent = "Cosas que hago en Blender y Blockbench.";
                art_5_title.textContent = "el resto nose";
                art_5_desc.textContent = "emotes, shitpost... toda esa cosa";
            }
            
            break;
        }
        case "ca":{ //Català
            //Pàgina principal
            if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
                const langselector_eng = document.getElementById("langselector-english");
                const langselector_esp = document.getElementById("langselector-spanish");
                const langselector_cat = document.getElementById("langselector-catalan");
                langselector_eng.style = "color:#9b9b9b;";
                langselector_esp.style = "color:#9b9b9b;";
                langselector_cat.style = "color:white;";

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
            
            //Sobre mi
            if (window.location.pathname == "/about.html"){
                const about_main = document.getElementById("-loc-about-main");
                
                const about_title_games = document.getElementById("-loc-about-title-games");
                const about_title_art = document.getElementById("-loc-about-title-art");
                const about_title_3d = document.getElementById("-loc-about-title-3d");
                const about_title_music = document.getElementById("-loc-about-title-music");
                const about_title_other = document.getElementById("-loc-about-title-other");
                
                const about_desc_games = document.getElementById("-loc-about-desc-games");
                const about_desc_art = document.getElementById("-loc-about-desc-art");
                const about_desc_3d = document.getElementById("-loc-about-desc-3d");
                const about_desc_music = document.getElementById("-loc-about-desc-music");
                const about_desc_other1 = document.getElementById("-loc-about-desc-other1");
                const about_desc_other2 = document.getElementById("-loc-about-desc-other2");
                
                about_main.innerHTML = "Tinc 18 anys i soc de Barcelona. Actualment, estic estudiant per ser programador i dissenyador de videojocs o artista.<br /><br />Vull expressar les meves idees i manifestar la meva passió per mitjà dels videojocs i l'art! He estat treballant en videojocs des de 2020 com hobby, utilitzant el motor GameMaker i Godot per aprendre i crear. També soc artista com hobby des de 2022, dibuixant amb Krita. Recentment, he començat a aprendre a produir música electrònica com hobby, ja donaré més detalls quan faci el meu primer EP :)<br /><br />Aquesta web l'he fet jo sol! Uso aquesta web principalment per exposar el que faig, però si alguna vegada vull i tinc temps, posaré jocs web també!<br /><br />Potser em pots veure a esdeveniments de videojocs a Catalunya o Espanya.<br /><br />";
                
                about_title_games.textContent = "VIDEOJOCS";
                about_title_art.textContent = "ART DIGITAL";
                about_title_3d.textContent = "MODELAT 3D";
                about_title_music.textContent = "MÚSICA";
                about_title_other.textContent = "ALTRES COSES QUE FAIG A VEGADES";
                
                about_desc_games.innerHTML = "M'ha interessat fer videojocs des de cinquè de primària, però no he pogut fer cap projecte serio fins recentment amb HIThit.<br  />Tinc 5 anys d'experiència amb el motor GameMaker i ara estic aprenent també a utilitzar el motor Godot.<br  />Ara treballo en videojocs amb el pseudònim \"Studio ECSP\" amb altres persones!";
                about_desc_art.innerHTML = 'M\'agrada  dibuixar art conceptual, dracs, rèptils i coses amb molta estilització. M\'encanta l\'Art Déco, el Neó o l\'estilitzat a seques.<br  />Uso una <a style="color:lightgray;" target="_blank" href="https://www.xp-pen.com/product/artist-16-2nd-gen.html">Tauleta de dibuix XP-PEN Artist 16".</a> Pots veure el que dibuixo <a style="color:lightgray;" target="_self" href="https://ecsp.dev/art">aquí!</a>';
                about_desc_3d.textContent = 'M\'agrada fer modelatge low-poly i estilitzat amb Blender i Blockbench.';
                about_desc_music.innerHTML = 'He començat fa molt poc a provar de produir música electrònica, vull produir un EP aquest estiu, ja diré més quan tingui alguna cosa :)<br  />Les meves inspiracions més grans són <a style="color:lightgray;" href="https://incrediblepolo.bandcamp.com/album/ages" target="_blank">Incredible Polo</a>, <a style="color:lightgray;" href="https://mildhighclub.bandcamp.com/album/skiptracing" target="_blank">Mild High Club</a>, <a style="color:lightgray;" href="https://soundcloud.com/porter-robinson" target="_blank">Porter Robinson</a>, <a style="color:lightgray;" href="https://songs4lizards.bandcamp.com/album/pom-pom-guillotine" target="_blank">Lizzy\'s personal army</a> i <a style="color:lightgray;" href="https://snuffles.bandcamp.com/" target="_blank">snuffles.</a>';
                about_desc_other1.textContent = 'Disseny gràfic';
                about_desc_other2.textContent = 'Projectes de programació (com aquesta web!)';
            }
            
            //Dossier
            if (window.location.pathname == "/art.html"){
                const art_banner_title = document.getElementById('-loc-art-banner-title');
                const art_banner_desc = document.getElementById('-loc-art-banner-desc');
                
                const art_1_title = document.getElementById('-loc-art-1-title');
                const art_1_desc = document.getElementById('-loc-art-1-desc');
                const art_2_title = document.getElementById('-loc-art-2-title');
                const art_2_desc = document.getElementById('-loc-art-2-desc');
                const art_3_title = document.getElementById('-loc-art-3-title');
                const art_3_desc = document.getElementById('-loc-art-3-desc');
                const art_4_title = document.getElementById('-loc-art-4-title');
                const art_4_desc = document.getElementById('-loc-art-4-desc');
                const art_5_title = document.getElementById('-loc-art-5-title');
                const art_5_desc = document.getElementById('-loc-art-5-desc');
                
                art_banner_title.textContent = "L'ART D'ECSP";
                art_banner_desc.innerHTML = "Aquí està tot el que he fet des de 2022. Inclou art conceptual, dibuixos regulars i models 3D.<br  /><br  />Fes clic a les imatges per obrir-les!";
                
                art_1_title.textContent = "HIThit";
                art_1_desc.textContent = "El videojoc en el qual estic treballant actualment i el meu projecte de final de grau mitjà. És un joc de baralles i ritme per torns amb un gameplay a lo Rhythm Paradise.";
                art_2_title.textContent = "ECSPdrac";
                art_2_desc.textContent = "La mascota de la web! Aquest és un drac low-poly i digital que viu dins dispositius electrònics.";
                art_3_title.textContent = "Jocs de navegador";
                art_3_desc.textContent = "A penes dibuix-ho art conceptual dels meus jocs de navegador més simples.";
                art_4_title.textContent = "Models 3D";
                art_4_desc.textContent = "Coses que faig en Blender i Blockbench.";
                art_5_title.textContent = "la resa ns";
                art_5_desc.textContent = "emotes, shitpost... tota aquella cosa";
            }
            break;
        }
    }
}