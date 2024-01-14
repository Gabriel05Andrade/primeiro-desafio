let nomeDoHeroi = "Xaulin Matador de Porco";
let xpDoHeroi = 15000;
let RankingDoHeroi;

if (xpDoHeroi <= 1000) {
  RankingDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
  RankingDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
  RankingDoHeroi = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
  RankingDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
  RankingDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
  RankingDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
  RankingDoHeroi = "Imortal";
} else if (xpDoHeroi) {
  RankingDoHeroi = "Radiante";
}
console.log(
  "O Herói de nome " + nomeDoHeroi + " está no nível " + RankingDoHeroi
);

