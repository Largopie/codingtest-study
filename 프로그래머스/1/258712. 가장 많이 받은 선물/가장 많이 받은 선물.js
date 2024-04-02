const makeGiverAndTaker = (friends) => {
  const giverAndTaker = {};

  friends.forEach((giver) => {
    giverAndTaker[giver] = {};
    friends.forEach((taker) => {
      if (giver !== taker) {
        giverAndTaker[giver][taker] = 0;
      }
    });
  });

  return giverAndTaker;
};

function solution(friends, gifts) {
  const giverAndTaker = makeGiverAndTaker(friends);
  const presentPoint = {};
  const nextMonthGifts = {};

  friends.forEach((friend) => {
    presentPoint[friend] = 0;
    nextMonthGifts[friend] = 0;
  });

  gifts.forEach((gift) => {
    const [giver, taker] = gift.split(' ');

    presentPoint[giver] += 1;
    presentPoint[taker] -= 1;

    giverAndTaker[giver][taker] += 1;
  });

  friends.forEach((friendA) => {
    friends.forEach((friendB) => {
      if (friendA !== friendB) {
        if (giverAndTaker[friendA][friendB] > giverAndTaker[friendB][friendA]) {
          nextMonthGifts[friendA] += 1;
        } else if (giverAndTaker[friendA][friendB] === giverAndTaker[friendB][friendA]) {
          if (presentPoint[friendA] > presentPoint[friendB]) {
            nextMonthGifts[friendA] += 1;
          }
        }
      }
    });
  });

  return Math.max(...Object.values(nextMonthGifts));
}