'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Barrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log(`1st`);
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

console.log(`2nd`);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

console.log(`3rd`);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log(`4th`);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

console.log(`5th`);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

console.log(`6th`);
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored); //using spread operator
//to keep the players out

console.log(`7th`);
team1 < team2 && console.log(`Team1 is more likely to win`);
team2 < team1 && console.log(`Team2 is more likely to win`);
