let phrase = prompt('tu veux quoi?');
if(phrase[phrase.length -1]=== "?"){
  console.log("Ouais Ouais...")
}
else if(phrase === phrase.toUpperCase()&& phrase.length > 0){
  console.log("Pwa, calme-toi...")  
}
else if(phrase.includes("Fortnite")||phrase.includes("fortnite")){
  console.log("on s'fait 1 partie?")  
}
else if(phrase.length == 0){
  console.log("t'es en PLS?")  
}
else{console.log("jm'en balek")}