document.addEventListener("scroll", function() {
    // Ajout d'événements qui déclenche une fonction chaque fois que l'utilisateur fait défiler la page.
    const scrollTop = window.scrollY 
    // Position actuelle du défilement
    const scrollHeight = document.body.scrollHeight - window.innerHeight 
    // Hauteur totale défilable
    const scrollPercent = Math.min(1, scrollTop / scrollHeight) 
    // Pourcentage de défilement (entre 0 et 1)
    
    const colorValue = Math.floor(scrollPercent * 255)
    // Calcule la valeur de couleur basée sur le pourcentage
    document.querySelector('footer').style.backgroundColor = `rgb(${colorValue}, 128, ${255 - colorValue})`
    // Applique la couleur calculée
})
