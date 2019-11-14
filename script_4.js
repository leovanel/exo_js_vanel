const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


var seventies = entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year<1980 && entrepreneur.year>1969;
});
console.log (seventies);

var identity = []
for (index in entrepreneurs){
  identity.push(entrepreneurs[index].first + " " + entrepreneurs[index].last);
}

console.log(identity);

var array_age = []
for (let index in entrepreneurs){
   age= 2019-(entrepreneurs[index].year);
  array_age.push(entrepreneurs[index].first + " " + entrepreneurs[index].last + " " + entrepreneurs[index].year + " " + age);
}

console.log(array_age);

function compare( a, b ) {
  if ( a.last < b.last ){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
}

entrepreneurs.sort( compare );


console.log(entrepreneurs);