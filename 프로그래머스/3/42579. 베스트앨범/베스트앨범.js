function solution(genres, plays) {
  const answer = [];
  const playlist = {};
  const allGenres = {};

  genres.forEach((genre, index) => {
    playlist[index] = { genre, play: plays[index] };
    allGenres[genre] = (allGenres[genre] || 0) + plays[index];
  });

  const sortedGenres = Object.keys(allGenres).sort((a, b) => allGenres[b] - allGenres[a]);

  sortedGenres.forEach((sortedGenre) => {
    answer.push(
      ...Object.keys(playlist)
        .filter((id) => sortedGenre === playlist[id].genre)
        .sort((a, b) => playlist[b].play - playlist[a].play)
        .slice(0, 2)
        .map((val) => Number(val)),
    );
  });

  return answer;
}