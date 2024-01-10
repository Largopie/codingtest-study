const readline = require('readline');
const { Z_ASCII } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const [nodeCount, linkCount, firstNode] = input[0].split(' ').map((val) => Number(val));
  const linked = input.slice(1).map((val) => val.split(' ').map((val) => Number(val)));

  const graph = Array.from({ length: nodeCount + 1 }, () => []);
  const answer = [];

  linked.forEach(([nodeA, nodeB]) => {
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  });

  graph.map((linkedNode) => {
    linkedNode.sort((a, b) => a - b);
  });

  const dfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [startNode];

    while (needVisit.length) {
      const node = needVisit.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...graph[node], ...needVisit];
      }
    }

    answer.push(visited);
  };

  const bfs = (graph, startNode) => {
    const visited = [];
    let needVisit = [startNode];

    while (needVisit.length) {
      const node = needVisit.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]];
      }
    }

    answer.push(visited);
  };

  dfs(graph, firstNode, []);
  bfs(graph, firstNode, []);

  console.log(answer.map((val) => val.join(' ')).join('\n'));
};
