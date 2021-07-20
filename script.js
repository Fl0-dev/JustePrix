

//Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


//Cacher l'erreur
    error.style.display = "none";
//Déclaration des variables utilisées
    let nbAleatoire = Math.floor(Math.random() * 1001);
    let nbCoups = 0;
    let nbChoisi;

    /**
     * Compare 2 nombres et indique si
     * supérieur, inférieur ou égal
     * @param bonNb
     * @param nbChoisi
     */
    function verif(bonNb, nbChoisi) {

        //création de la variable retour
        let instruction = document.createElement('div');
        //compare
        if (nbChoisi < bonNb) {
            //c'est plus
            instruction.textContent = "Coup " + nbCoups + " : C'est plus que " + nbChoisi;
            instruction.className = "instruction plus";
        } else if (nbChoisi > bonNb) {
            //c'est moins
            instruction.textContent = "Coup " + nbCoups + " : C'est moins que " + nbChoisi;
            instruction.className = "instruction moins";
        } else {
            //c'est le juste prix
            instruction.textContent = "Coup " + nbCoups + " : " + nbChoisi + " est le juste prix !";
            instruction.className = "instruction fini";
            input.disabled = true;
        }
        //Ajouter le résultat à l'affichage
        document.querySelector('#instructions').prepend(instruction);

    }

//Vérifier que l'utilisateur donne bien un nombre
    input.addEventListener('keyup', () => {
        if (isNaN(input.value)) {
            error.style.display = "inline";
        } else {
            error.style.display = "none";
        }
    });
//Agir à l'envoi du formulaire
    formulaire.addEventListener('submit', (e) => {
        //annule le submit
        e.preventDefault();
        if (isNaN(input.value) || input.value === '') {
            //mettre la bordure en rouge
            input.style.borderColor = "red";
        } else {
            //mettre la bordure en gris
            input.style.borderColor = "silver";
            nbCoups++;
            //stockage de la valeur
            nbChoisi = input.value;
            //vider le champs
            input.value = '';
            verif(nbAleatoire, nbChoisi);
        }
    });


