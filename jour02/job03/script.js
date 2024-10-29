document.addEventListener("DOMContentLoaded", function(){

let count = 0  
    // Une variable count est initialisée à 0 pour garder la trace du nombre de clics.

function addone(){  
    //La fonction addone() incrémente la variable count et met à jour le contenu du paragraphe avec le nouveau nombre.
    count++ 
    
    document.getElementById("compteur").textContent = count
        // met a jour <p> donc affichage compteur 
        //   changer seulement le texte de l'élément (la valeur de count), sans affecter le HTML à l’intérieur .
}
    // document.addEventListener("DOMContentLoaded", ...) : Le script attend que le HTML soit entièrement chargé.
    const button = document.getElementById("button")
    button.addEventListener("click", addone)
    //Ajoute l'evenement "click" pour le bouton 
})