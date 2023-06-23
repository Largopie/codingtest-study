def solution(n, wires):
    def make_graph(wires, n):
        graph = []
        
        for i in range(n+1):
            graph.append([])

        for i in wires:
            graph[i[0]].append(i[1])
            graph[i[1]].append(i[0])
        return graph

    def dfs(graph, v, visited):
        visited[v] = True
        for i in graph[v]:
            if not visited[i]:
                dfs(graph,i,visited)

    answer = []
    for i in range(len(wires)):
        wire = wires[:i]+wires[i+1:]
        graph = make_graph(wire, n)

        node = set()
        for i in range(1, n+1):
            visited = [False]*(n+1)
            dfs(graph, i, visited)
            node.add(visited.count(True))
        answer.append(max(node) - min(node))
    return min(answer)
                