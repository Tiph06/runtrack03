// Fonction showhide pour gérer l'affichage et la disparition de l'article
function showhide() {
    // Vérifier si l'article existe déjà
    const article = document.getElementById("citation");

    if (article) {
        // Si l'article existe, on le supprime pour le cacher
        article.remove();
    } else {
        // Si l'article n'existe pas, on le crée et on l'ajoute au DOM
        const newArticle = document.createElement("article");
        newArticle.id = "citation"; // On donne l'ID pour pouvoir le repérer
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}

// Ajout de l'événement "click" sur le bouton pour déclencher la fonction showhide
document.getElementById("button").addEventListener("click", showhide);
