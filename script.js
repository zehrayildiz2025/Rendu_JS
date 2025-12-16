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

        avantageSection.appendChild(titleAv);

        // // creer p et l'inserer dans la section
        // let pAv = document.createElement("p");

        // // creer carte d'avantages, faire un boucle forEach et l'inserer dans la section

        let cardsContainer = document.createElement("div");
        cardsContainer.classList.add("cardsContainerFlex");

        
        data.avantagesClients.forEach(elementAv => {
            let card = document.createElement("div");
            card.textContent = elementAv;
            cardsContainer.appendChild(card);
        });
        avantageSection.appendChild(cardsContainer);




    })
