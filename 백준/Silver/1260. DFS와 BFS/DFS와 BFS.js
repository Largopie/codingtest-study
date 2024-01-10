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
  const dfsVisited = Array.from({ length: nodeCount + 1 }, () => false);
  const bfsVisited = Array.from({ length: nodeCount + 1 }, () => false);
  const answer = [[], []];

  linked.forEach(([nodeA, nodeB]) => {
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  });

  graph.map((linkedNode) => {
    linkedNode.sort((a, b) => a - b);
  });

  const dfs = (graph, currentNode, willVisit) => {
    dfsVisited[currentNode] = true;
    answer[0].push(currentNode);

    willVisit = [...graph[currentNode], ...willVisit].filter((node) => !dfsVisited[node]);

    while (willVisit.length) {
      const node = willVisit.shift();

      if (!dfsVisited[node]) {
        dfs(graph, node, willVisit);
      }
    }
  };

  const bfs = (graph, currentNode, willVisit) => {
    bfsVisited[currentNode] = true;
    answer[1].push(currentNode);

    willVisit = [...willVisit, ...graph[currentNode]].filter((node) => !bfsVisited[node]);

    while (willVisit.length) {
      const node = willVisit.shift();

      if (!bfsVisited[node]) {
        bfs(graph, node, willVisit);
      }
    }
  };

  dfs(graph, firstNode, []);
  bfs(graph, firstNode, []);

  console.log(answer.map((val) => val.join(' ')).join('\n'));
};
