// Etape 1:Recuperer le lien de json pour fetch

const jsonLink = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/plombier-a-velo.json";

fetch(jsonLink)
    .then(response => response.json())
    .then(data => {

        // Etape 2 : Faire la section hero

        let containerHero = document.getElementById("hero");
        // containerHero.classList.add("hero");

        // creer un titre
        let heroTitle = document.createElement("h1");
        heroTitle.classList.add("heroTitle");
        heroTitle.textContent = data.nomCommercial;
        // les inserer dans la section
        containerHero.appendChild(heroTitle);

        // creer un slogan p
        let slogan = document.createElement("p");
        slogan.classList.add("slogan");
        slogan.textContent = data.phraseAccroche;
        // les inserer dans la section
        containerHero.appendChild(slogan);

        // creer un bouton
        let boutonHero = document.createElement("button");
        boutonHero.classList.add("bouton");
        boutonHero.textContent = data.texteAppelAction;
        // les inserer dans la section
        containerHero.appendChild(boutonHero);


        // Etape 3 : Faire la section avantages: cibler la section avantage, creer une div carte, faire un boucle avec forEach

        let avantageSection = document.getElementById("avantages");

        // creer h2 et l'inserer dans la section
        let titleAv = document.createElement("h2");
        titleAv.classList.add("titles");
        titleAv.textContent = "Avantages Clients";
        // l'inserer dans la section
        avantageSection.appendChild(titleAv);

        // // creer carte d'avantages

        let cardsContainer = document.createElement("div");
        cardsContainer.classList.add("cardsContainerFlex");

        // faire un boucle forEach
        data.avantagesClients.forEach(elementAv => {
            let card = document.createElement("p");
            card.classList.add("carte");
            card.textContent = elementAv;
            cardsContainer.appendChild(card);
        });
        // l'inserer dans la section
        avantageSection.appendChild(cardsContainer);


        // Etape 4 : faire la section Service 

        // cibler la section service
        let serviceSection = document.getElementById("services");

        // creer carte de services
        let servicesContainer = document.createElement("div");
        servicesContainer.classList.add("cardsContainerFlex");

        // creer h2 et l'inserer dans la section
        let titleServ = document.createElement("h2");
        titleServ.classList.add("titles");
        titleServ.textContent = "Services";
        serviceSection.appendChild(titleServ);

        // faire un boucle forEach
        data.services.forEach(elementServ => {

            let cardServ = document.createElement("div");
            cardServ.classList.add("carte");

            let imageCard = document.createElement("img");
            imageCard.classList.add("imgServ");
            imageCard.src = elementServ["image-url"];
            cardServ.appendChild(imageCard);
            servicesContainer.appendChild(cardServ);

            let titleCard = document.createElement("h3");
            titleCard.classList.add("titleCard");
            titleCard.textContent = elementServ.nom;
            cardServ.appendChild(titleCard);

            let descCard = document.createElement("p");
            descCard.textContent = elementServ.description;
            cardServ.appendChild(descCard);

        });
        // l'inserer dans la section
        serviceSection.appendChild(servicesContainer);


        // Etape 5 : faire la section Temoignages

        // cibler la section service
        let temoignagesSection = document.getElementById("temoignages");


        // creer h2 et l'inserer dans la section
        let titleTem = document.createElement("h2");
        titleTem.classList.add("titles");
        titleTem.textContent = "Temoignages";
        temoignagesSection.appendChild(titleTem);

        // creer carte de temoignages
        let temoignagesContainer = document.createElement("div");
        temoignagesContainer.classList.add("cardsContainerFlex");

        // faire un boucle forEach
        data.temoignages.forEach(elementTem => {
            let cardTem = document.createElement("div");
            cardTem.classList.add("carte");
            temoignagesContainer.classList.add("temCont");
            temoignagesContainer.appendChild(cardTem);

            let titleCardTem = document.createElement("h3");
            titleCardTem.classList.add("titleCard");
            titleCardTem.textContent = elementTem.prenom;
            cardTem.appendChild(titleCardTem);

            let descCardTem = document.createElement("p");
            descCardTem.textContent = elementTem.typeIntervention;
            cardTem.appendChild(descCardTem);

            let commentTem = document.createElement("p");
            commentTem.textContent = elementTem.commentaire;
            cardTem.appendChild(commentTem);

            let noteTem = document.createElement("h4");
            noteTem.classList.add("noteTem");
            noteTem.textContent = "Notes : " + " " + elementTem.note;
            cardTem.appendChild(noteTem);

        });

        // l'inserer dans la section
        temoignagesSection.appendChild(temoignagesContainer);

    })
    .catch(error => console.error('Error 404', error));
//**FIN FETCH */

