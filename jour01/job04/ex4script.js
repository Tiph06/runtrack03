let annee = prompt("Veuillez rentrer une année")

function bisextile(annee){
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)){
        return  true
    }else{
        return false
    }
}

let estBisextile= bisextile(annee)

console.log(estBisextile)
