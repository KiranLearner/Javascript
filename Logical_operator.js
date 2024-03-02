// jonas schmedtmann course from Udemy
// Challenge 3 if else statement

let scoreDol = [96+108+89];
let scoreKo =[88+91+110];
let scoreDolphins =scoreDol/3;
let scoreKoalas = scoreKo/3;

if (scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy")
} else if (scoreKoalas>scoreDolphins) {
    console.log("Koalas win the trophy")
} else if( scoreKoalas === scoreDolphins){
    console.log("Both win the trophy")
}
