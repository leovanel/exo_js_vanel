let etages = prompt('combien d étages?');
let str1 = " "
let str2 = "#"
let s = Number(etages)-1;
let n = 1;

while (n<etages){
  
  console.log(str1.repeat(s)+str2.repeat(n))
  s--;
  n++;
}

