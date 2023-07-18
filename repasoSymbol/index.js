
// let secretKey=Symbol("identidadSecreta");
// let girlFriend=Symbol("girl");

// let hero={
//     name:"Bruce",
//     girlFriend:"Celina Kail"
// };

// hero[secretKey]= "batman";
// //console.log(hero[secretKey]);
// //console.log(hero.identidadSecreta);

// for (const key in hero) {
//     if (Object.hasOwnProperty.call(hero, key)) {
//         const element = hero[key];
//         console.log(element);
//     }
// }

function Punto(coordX,coordY){
    this.coordX=coordX;
    this.coordY=coordY;
    this.suma= function(){
        //this.suma(this.coordX + this.coordY);
     alert(Number(this.coordX) + Number(this.coordY));
    };     
}

let p1 = new Punto(1,2);
let p2 = new Punto(2,3);
//console.log(p1.suma(p2).tostring());

console.log("coordenadas: " + p1.coordX +"," +p1.coordY);
p1.suma();

