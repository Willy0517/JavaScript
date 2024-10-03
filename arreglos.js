let autos = new Array("BMW","MERCEDES BENZ","VOLVO");
const coches = ["BMW","MERCEDES BENZ","VOLVO"];
    console.log(coches[1]);
for(let contador=0;contador<coches.length;contador++){
    console.log(contador+" : "+coches[contador])
}
coches[1]= "MercedesBenz";
coches.push("NISSAN");
console.log(coches);
coches[coches.length]="AUDI";
console.log(coches);
coches.pop();
console.log(coches);
console.log(Array.isArray(coches));
console.log(coches instanceof Array)