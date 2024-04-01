function solution(friends, gifts) {
  const giveAndTake = {};
  const presentPoint = {};
  const grade = {};

  friends.forEach((friend) => {
    presentPoint[friend] = 0;
    grade[friend] = 0;
  });

  for (let i = 0; i < friends.length; i++) {
    const spliceFriends = [...friends];
    spliceFriends.splice(i, 1);

    spliceFriends.forEach((friend) => {
      giveAndTake[`${friends[i]} ${friend}`] = 0;
    });
  }

  gifts.forEach((gift) => {
    const [giver, taker] = gift.split(' ');

    presentPoint[giver] += 1;
    presentPoint[taker] -= 1;

    giveAndTake[gift] += 1;
  });

  Object.keys(giveAndTake).forEach((key) => {
    const [giver, taker] = key.split(' ');
    const give = giver + ' ' + taker;
    const take = taker + ' ' + giver;

    if (giveAndTake[give] > giveAndTake[take]) {
      grade[giver] += 1;
    } else if (giveAndTake[give] < giveAndTake[take]) {
      grade[taker] += 1;
    } else if (giveAndTake[give] === giveAndTake[take]) {
      if (presentPoint[giver] > presentPoint[taker]) {
        grade[giver] += 1;
      } else if (presentPoint[giver] < presentPoint[taker]) {
        grade[taker] += 1;
      }
    }
  });

  console.log(grade);
  return Math.max(...Object.values(grade)) / 2;
}