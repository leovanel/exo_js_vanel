const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function is_rented(x) {
  if ( x>0 ){
    console.log("oui");  }
  else {console.log("non");}
  x++  
}

for (index in books ){
is_rented(books[index].rented);
}


function compare( a, b ) {
  if ( a.rented < b.rented  ){
    return 1;
  }
  if ( a.rented  > b.rented  ){
    return -1;
  }
  return 0;
}

books.sort( compare );
mostrented = books[0].title;
console.log("le livre le plus emprunté est " + mostrented);


function compare2( a, b ) {
  if ( a.rented < b.rented  ){
    return -1;
  }
  if ( a.rented  > b.rented  ){
    return 1;
  }
  return 0;
}

books.sort( compare2 );
lessrented = books[0].title;
console.log("le livre le moins emprunté est " + lessrented);




n=873495
f= books.find(x => x.id === n).title;
console.log("le livre avec l'id "+n+" est "+f);

f2= books.find(x => x.id === 133712).title;
console.log("le livre " +f2+ " va etre supprimé" );

f3= books.findIndex(x => x.id === 133712);
var removed = books.splice(f3,1);
console.log(removed);
console.log(books);

function compare3( a, b ) {
  if ( a.title < b.title  ){
    return -1;
  }
  if ( a.title  > b.title  ){
    return 1;
  }
  return 0;
}

books.sort( compare3 );
console.log(books);


