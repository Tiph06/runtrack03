
$(document).ready(function() {
    // Écouteur d'événement pour basculer l'affichage (voir def en bas)
    $("#toggleButton").click(function() {
        $("#textContainer").toggle() 
        // Bascule l'affichage de #textContainer
        $(this).text(function(i, text) {
            return text === "Afficher la citation" ? "Cacher la citation" : "Afficher la citation"
        })
    })
})

// Un écouteur d'événement est une fonction qui "écoute" ou surveille un événement particulier sur un élément HTML 
// (comme un clic, une soumission de formulaire, le survol de la souris, etc.). Lorsque l'événement se produit, l'écouteur exécute une fonction définie.