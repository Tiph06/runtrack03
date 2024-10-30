<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Konami</title>
    
    <style>
        body {
    background-color: white;
    color: black;
    font-family: Arial, sans-serif;
    text-align: center;
    transition: background-color 0.5s ease, color 0.5s ease; /* Transition pour le changement de style */
}


body.konami {
    background-color: #ff0052; /* Couleur de fond */
    color:#1cfff2; /* Couleur du texte */
}

h1, p {
    margin: 20px;
}
    </style>

    <script>

const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
]

let userInput = []

document.addEventListener('keydown', function(event) {
        // Écouteur d'événements pour les touches pressées
    userInput.push(event.key)

    // Vérifie si la séquence correspond au code Konami
    if (userInput.toString().indexOf(konamiCode.toString()) >= 0) {
        // Applique le style lorsque le code est entré correctement
        document.body.classList.add('konami')
        userInput = [] 
        // Réinitialise l'input
    }

    if (userInput.length > konamiCode.length) {
        // Réinitialise l'input si la séquence est incorrecte
        userInput.shift()
    }
})

    </script>
</head>
<body>
    <div class="content">
        <h1>Bienvenue sur notre page !</h1>
        <p>Appuyez sur les touches du code Konami pour changer le style.</p>
    </div>

</body>
</html>