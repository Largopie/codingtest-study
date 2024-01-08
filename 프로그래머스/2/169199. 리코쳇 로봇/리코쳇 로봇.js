function solution(board) {
  let answer = 0;
  const width = board[0].length;
  const height = board.length;
  const visited = Array.from({ length: height }, () => Array.from({ length: width }, () => false));
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  board.forEach((line, yIndex) => {
    line.split('').forEach((val, xIndex) => {
      if (val === 'R') {
        visited[yIndex][xIndex] = true;
        queue.push([yIndex, xIndex]);
      }
    });
  });

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      let [ny, nx] = queue.shift();

      for (let j = 0; j < dx.length; j++) {
        let moveX = nx + dx[j];
        let moveY = ny + dy[j];

        while (moveX >= 0 && moveX <= width - 1 && moveY >= 0 && moveY <= height - 1 && board[moveY][moveX] !== 'D') {
          moveX += dx[j];
          moveY += dy[j];
        }

        moveX -= dx[j];
        moveY -= dy[j];

        if (board[moveY][moveX] === 'G') return answer + 1;
        if (!visited[moveY][moveX]) {
          queue.push([moveY, moveX]);
          visited[moveY][moveX] = true;
        }
      }
    }
    answer++;
  }

  return -1;
}