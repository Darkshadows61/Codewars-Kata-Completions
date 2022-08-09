//8kyu Total Points
function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }
//test points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])