// L’esercizio consiste nella scrittura di una funzione 
// “ElaboraStringhe” che prende in input una lista di stringhe 
// ed in modo ciclico alla prima stringa ne rimuove le vocali, 
// alla seconda si deve invertire la stringa, alla terza si rimuovono
//  le vocali e si inverte, poi si ricomincia rimuovendo le vocali,
//   invertendo la stringa e applicarle entrambi, poi 
//   all'infinito continuare... Il nuovo insieme di queste
//    stringhe manipolate deve essere restituito dalla funzione 
//    concatenandole con uno spazio, ad esempio date le stringhe 
//    “Alessandro” “hai” “fatto” “un” “bel” “lavoro” deve risultare
//    “lssndr iah ttf n leb rvl”.


const set = new Set(['a','u','o','e','i'])
let list = ["Alessandro" ,"hai" ,"fatto" ,"un", "bel" ,"lavoro"]


const ElaboraStringhe = (list)=>{
    let count = 0
    for(let i = 0; i<list.length;i++){
        if (count== 0){
           list[i] = RemoveVocals(list[i])
           count++
        }else if(count==1){
           list[i] = Reverse(list[i])
           count++
        }else if(count==2){
            list[i] = RemoveVocals(list[i])
          list[i] =  Reverse(list[i])
          count==0
        }
    }
    return list.join(' ')
}

const RemoveVocals = (str)=>{
    const arr =[]
    for(let i =0; i < str.length ;i++){
        if(!set.has(str[i].toLowerCase())){
         arr.push(str[i])
        }
    }
    return arr.join('')
}

const Reverse = (string) => {
    return string.split('').reverse().join('')
}

console.log(ElaboraStringhe(list))