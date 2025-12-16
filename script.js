// Etape 1:Recuperer le lien de fetch
const jsonLink = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/plombier-a-velo.json";

fetch(jsonLink)
    .then(response => response.json())
    .then(data => {
        console.log(' :', data);
        // Etape 2 : Faire la section héro, avec un h1, p pour le slogan, un bouton pour l'appelAction
        //cibler ma section

        // creer un titre
        let containerHero = document.getElementById("hero");
        let heroTitle = document.createElement("h1");
        heroTitle.textContent = data.nomCommercial;
        // les inserer dans la section
        containerHero.appendChild(heroTitle);

        // creer un slogan p
        let slogan = document.createElement("p");
        slogan.textContent = data.phraseAccroche;
        // les inserer dans la section
        containerHero.appendChild(slogan);

        // creer un bouton
        let boutonHero = document.createElement("button");
        boutonHero.textContent = data.texteAppelAction;
        // les inserer dans la section
        containerHero.appendChild(boutonHero);

        // Etape 3 : Faire la section avantages: cibler la section avantage, creer une div carte, faire un boucle avec forEach
        let avantageSection = document.getElementById("avantages");
        // creer h2 et l'inserer dans la section
        let titleAv = document.createElement("h2");
        titleAv.textContent = "Avantages Clients";
        // l'inserer dans la section
        avantageSection.appendChild(titleAv);

        // // creer carte d'avantages

        let cardsContainer = document.createElement("div");
        cardsContainer.classList.add("cardsContainerFlex");

        // faire un boucle forEach
        data.avantagesClients.forEach(elementAv => {
            let card = document.createElement("div");
            card.textContent = elementAv;
            cardsContainer.appendChild(card);
        });

        // l'inserer dans la section
        avantageSection.appendChild(cardsContainer);

        // Etape 4 : faire la section Service 
        // cibler la section service
        let serviceSection = document.getElementById("services");
        // creer h2 et l'inserer dans la section
        let titleServ = document.createElement("h2");
        titleServ.textContent = "Services";
        serviceSection.appendChild(titleServ);

        // creer carte de services
        let servicesContainer = document.createElement("div");
        servicesContainer.classList.add("cardsContainerFlex");

        // faire un boucle forEach
        data.services.forEach(elementServ => {
            let cardServ = document.createElement("div");

            servicesContainer.appendChild(cardServ);
            let titleCard = document.createElement("h3");
            titleCard.textContent = elementServ.nom;
            cardServ.appendChild(titleCard);

            let descCard = document.createElement("p");
            descCard.textContent = elementServ.description;
            cardServ.appendChild(descCard);

            let imageCard = document.createElement("img");
            imageCard.classList.add("imgServ");
            imageCard.src = elementServ["image-url"];
            cardServ.appendChild(imageCard);

        });
        serviceSection.appendChild(servicesContainer);
        // l'inserer dans la section

        // Etape 5 : faire la section Temoignages
        // creer carte d'avantages, faire un boucle forEach et l'inserer dans la section

    })
