let palavra
let anagramas = []

process.stdin.on("data", function (data) {
    palavra = data.toString().trim();
  
    palavra = palavra.split("");

for (let i = 0; i < palavra.length; i++) {
    for(let j = 0; j < palavra.length; j++){
        let aux = palavra[i]
        palavra[i] = palavra[j]
        palavra[j] = aux
    }
    if (!anagramas.includes(palavra.join(""))){
        anagramas.push(palavra.join(""))
        console.log(palavra.join(""))
    }
}
})

/* palavra = palavra.join("") // transforma em string
console.log(palavra) */