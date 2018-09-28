// import _ from 'lodash';
// import chance from 'chance';
// var _ = require('lodash');
// var Chance = require('chance');
// let chance = new Chance();

// const PlayerAPI = {
//   generateRandomName: function() {
//     return chance.name();
//   },
//   generateRandomPosition: function() {
//     var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
//     var randomIndex = Math.floor(Math.random() * 5);

//     return positions[randomIndex];
//   },
//   playerObjectGenerator: function() {
//     return _.map(_.range(0, length), function(index) {
//       return {
//         number: index,
//         name: generateRandomName(),
//         position: generateRandomPosition(),
//       };
//     });
//   },
//   players: this.playerObjectGenerator(25),
//   toString: function() {
//     var result = '';

//     for (i in this.players) {
//       result +=
//         'Name: ' +
//         players[i].name +
//         '\n' +
//         ' - ' +
//         players[i].number +
//         '\n' +
//         'Position: ' +
//         players[i].position;
//     }
//     return result;
//   },
// };

// function generateRandomName() {
//   return chance.name();
// }

// function generateRandomPosition() {
//   var positions = ['PG', 'SG', 'SF', 'PF', 'C'];
//   var randomIndex = Math.floor(Math.random() * 5);

//   return positions[randomIndex];
// }

// function playerObjectGenerator(length) {
//   return _.map(_.range(0, length), function(index) {
//     return {
//       number: index,
//       name: generateRandomName(),
//       position: generateRandomPosition(),
//     };
//   });
// }

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
// const PlayerAPI = {
//   players: [
//     {number: 1, name: 'Ben Blocker', position: 'G'},
//     {number: 2, name: 'Dave Defender', position: 'D'},
//     {number: 3, name: 'Sam Sweeper', position: 'D'},
//     {number: 4, name: 'Matt Midfielder', position: 'M'},
//     {number: 5, name: 'William Winger', position: 'M'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 7, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//     {number: 6, name: 'Fillipe Forward', position: 'F'},
//   ],
//   all: function() {
//     return this.players;
//   },
//   get: function(id) {
//     const isPlayer = p => p.number === id;
//     return this.players.find(isPlayer);
//   },
// };

// export default PlayerAPI;
