function gameObject() {
    const gameObject = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: "0",
            shoe: "16",
            points: "22",
            rebounds: "12",
            assists: "12",
            steals: "3",
            blocks: "1",
            slamDunks: "1" 
          },
          "Reggie Evans" : {
            number: "30",
            shoe: "14",
            points: "12",
            rebounds: "12",
            assists: "12",
            steals: "12",
            blocks: "12",
            slamDunks: "7" 
          },
          "Brook Lopez" : {
            number: "11",
            shoe: "17",
            points: "17",
            rebounds: "19",
            assists: "10",
            steals: "3",
            blocks: "1",
            slamDunks: "15" 
          },
          "Mason Plumlee" : {
            number: "1",
            shoe: "19",
            points: "26",
            rebounds: "12",
            assists: "6",
            steals: "3",
            blocks: "8",
            slamDunks: "5" 
          },
          "Jason Terry" : {
            number: "31",
            shoe: "15",
            points: "19",
            rebounds: "2",
            assists: "2",
            steals: "4",
            blocks: "11",
            slamDunks: "1" 
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: "4",
            shoe: "18",
            points: "10",
            rebounds: "1",
            assists: "1",
            steals: "2",
            blocks: "7",
            slamDunks: "2" 
          },
          "Bismak Biyombo" : {
            number: "0",
            shoe: "16",
            points: "12",
            rebounds: "4",
            assists: "7",
            steals: "7",
            blocks: "15",
            slamDunks: "10" 
          },
          "DeSagna Diop" : {
            number: "2",
            shoe: "14",
            points: "24",
            rebounds: "12",
            assists: "12",
            steals: "4",
            blocks: "5",
            slamDunks: "5" 
          },
          "Ben Gordon" : {
            number: "8",
            shoe: "15",
            points: "33",
            rebounds: "3",
            assists: "2",
            steals: "1",
            blocks: "1",
            slamDunks: "0" 
          },
          "Brendan Haywood" : {
            number: "33",
            shoe: "15",
            points: "6",
            rebounds: "12",
            assists: "12",
            steals: "22",
            blocks: "5",
            slamDunks: "12" 
          },
        },
      },
    }
    return gameObject;
  }

  console.log(gameObject());

  function numPointsScored(playerName) {
    let game = gameObject();
    let pointsScored;

    
    function findPlayer() {
        for (const team in game) {
            // console.log(team); // home, away
            const gameObj = game[team];
            for (const keys in gameObj) {
                // console.log(keys); // home, teamName, colors, players
                const playerNameObj = gameObj[keys];
                for (const names in playerNameObj) {
                    console.log(names);
                    if (names === playerName) {
                        console.log(game[team][keys][names].points);
                        pointsScored = game[team][keys][names].points;
                    }
                }
            }
        }
    }

    findPlayer();
    return pointsScored;

  }

  numPointsScored("Brendan Haywood");

  function shoeSize(playerName) {
    let game = gameObject();
    let playerShoeSize;

    
    function findPlayer() {
        for (const team in game) {
            // console.log(team); // home, away
            const gameObj = game[team];
            for (const keys in gameObj) {
                // console.log(keys); // home, teamName, colors, players
                const playerNameObj = gameObj[keys];
                for (const names in playerNameObj) {
                    console.log(names);
                    if (names === playerName) {
                        console.log(game[team][keys][names].shoe);
                        playerShoeSize = game[team][keys][names].shoe;
                    }
                }
            }
        }
    }

    findPlayer();
    return playerShoeSize;

  }

  shoeSize("Brendan Haywood");

  function teamColors(teamName) {
    const game = gameObject();
    let colorArray;

    for (const team in game) {
        //console.log(game[team].teamName);
        if (game[team].teamName === teamName) {
            colorArray = game[team].colors;
        }
    }

    console.log(colorArray);
    return colorArray;

  }

  teamColors("Brooklyn Nets");

  function teamNames() {
    const game = gameObject();
    const teamNamesArray = [];

    for (const team in game) {
        teamNamesArray.push(game[team].teamName);
    }

    console.log(teamNamesArray);
    return teamNamesArray;
  }

  teamNames();

  function playerNumbers(teamName) {
    const game = gameObject();
    const playerNumbersArray = [];

    for (const team in game) {
        if (game[team].teamName === teamName) {
            const gameObj = game[team];
            for (const keys in gameObj) {
                const teamInfo = gameObj[keys];
                for (const names in teamInfo) {
                    console.log(names);
                    playerNumbersArray.push(teamInfo[names].number);
                }
            }
        }
    }

    playerNumbersArray.splice(0, 15);
    console.log(playerNumbersArray);

  }

  playerNumbers("Brooklyn Nets");

  