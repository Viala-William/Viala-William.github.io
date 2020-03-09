
function preload(){
    let preload=document.createElement("video");
    preload.src="ressource/preload.mp4";
    preload.id="preload";
    document.preload.appendChild(preload);
}
function init(){

    let timeout= setTimeout(showPage, 2500);
    timeout= setTimeout(cutPage, 2500);

    let header = document.createElement("div");
    let footer = document.createElement("div");
    let nav = document.createElement("nav");
    let mainDiv = document.createElement("div");
    let secDiv = document.createElement("div");
    let projets = document.createElement("div");
    let contact = document.createElement("div");

    //header
    let player1 = document.createElement("video");
    player1.src="ressource/headBg.mp4";
    player1.id="headBg";
    player1.type="video/mp4";

    header.appendChild(player1);

    //footer
    let player2 = document.createElement("video");
    player2.src="ressource/footBg.mp4";
    player2.id="footBg";
    player2.type="video/mp4";

    footer.appendChild(player2);

    //mainDiv

    let img = document.createElement("img");
    img.src="img/mainPic";
    img.id="mainPic";

    let mainText = document.createElement("p");
    mainText.class="line";
    mainText.id="mainText";
    mainText.innerHTML="Bienvenue sur mon site perso, /br je suis un jeune étudiant passioné d'informatique,/br actuellement en recherche de stage pour valider mon DUT";

    let secText = document.createElement("p");
    secText.class="line";
    secText.id="secText";
    secText.innerHTML="J'affectione particulièrement le hardware et suis sensible aux causes écologiques /br j'aime me tenir aux courant des dernières avancées techniques et souhaite devenir administrateur/ingénieur système " +
        "/br étant également passioné de jeux-vidéos, je n'écarte pas la possibilité d'intégrer leur création à long-terme";

    let presVid = document.createElement("video");
    // a venir presVid.src=""
    let cvContainer = document.createElement("p");
    cvContainer.innerHTML = "Curriculum Vitae :";
    cvContainer.id="cvContainer";
    cvContainer.class="line";
    let cv = document.createElement("a");
    cv.href="ressource/cv.pdf";
    cv.innerHTML="Cliquez ici pour télécharger mon cv";

    cvContainer.appendChild(cv);

    mainDiv.appendChild(img);
    mainDiv.appendChild(cvContainer);

    //contact
    let infos = document.createElement("h1");
    infos.innerHTML="Contact infos";
    infos.id="title";

    let email = document.createElement("p");
    email.innerHTML="Adresse mail : william.viala@etu.umontpellier.fr";
    email.class="line";

    // a venir let form = document.createElement("input");

    contact.appendChild(infos);
    contact.appendChild(email);


    // preloader limitless zoom-in sc
    // footer-header sc mirror
    document.body.appendChild(header);
    document.body.appendChild(nav);
    document.body.appendChild(mainDiv);
    document.body.appendChild(secDiv);
    document.body.appendChild(projets);
    document.body.appendChild(contact);
    document.body.appendChild(header);
    document.body.appendChild(footer);
}


function showPage(){
    document.getElementById("body").classList.remove("hidden");
}

function cutPage(){
    document.removeChild(preload);
}

preload();
init();