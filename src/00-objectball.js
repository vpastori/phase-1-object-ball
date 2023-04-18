function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
               "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
               },
               "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
               },
               "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
               },
               "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
               },
               "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
               }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                   },
                   "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                   },
                   "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                   },
                   "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                   },
                   "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

function allPlayers(){
    const homePlayers = gameObject().home.players
    const awayPlayers = gameObject().away.players
    const allPlayers = {...homePlayers, ...awayPlayers}
    return allPlayers
}

function numPointsScored(playerName){
    return allPlayers()[playerName].points
}

function shoeSize(playerName){
    return allPlayers()[playerName].shoe
}

function teamColors(teamName){ 
    if(teamName === "Brooklyn Nets"){
        return gameObject().home.colors
    } else if(teamName === "Charlotte Hornets") {
        return gameObject().away.colors
    } else {
        return 'The team does not exist'
    }
}

function teamNames() {
    const game = gameObject();
    const teamNames = [game.home.teamName, game.away.teamName];
    return teamNames;
  }
  

function playerNumbers(teamName){
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    const nums = []

    if(teamName === game.home.teamName){
        for(let player in homePlayers){
            nums.push(homePlayers[player].number)
        }
    } else if(teamName === game.away.teamName){
        for(let player in awayPlayers){
            nums.push(awayPlayers[player].number)
        }
    }
    return nums
}

function playerStats(playerName){
    const playersObj = allPlayers();
    const playerInfo = playersObj[playerName];
    return {
        number: playerInfo.number,
        shoe: playerInfo.shoe,
        points: playerInfo.points,
        rebounds: playerInfo.rebounds,
        assists: playerInfo.assists,
        steals: playerInfo.steals,
        blocks: playerInfo.blocks,
        slamDunks: playerInfo.slamDunks
    }
}

function bigShoeRebounds() {
    const allPlayersObj = allPlayers();
    let maxShoeSize = -Infinity;
    let playerWithMaxShoeSize;
    for (const player in allPlayersObj) {
      const shoeSize = allPlayersObj[player].shoe;
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        playerWithMaxShoeSize = player;
      }
    }
    return allPlayersObj[playerWithMaxShoeSize].rebounds;
  }

  function mostPointsScored() {
    const allPlayersObj = allPlayers();
    let mostPoints = 0;
    let playerWithMostPoints = "";
    for (let playerName in allPlayersObj) {
      let points = allPlayersObj[playerName].points;
      if (points > mostPoints) {
        mostPoints = points;
        playerWithMostPoints = playerName;
      }
    }
    return playerWithMostPoints;
  }
