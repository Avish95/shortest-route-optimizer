import getMinDistanceNode from './minimumDistanceNode'

const graph: { [key: string]: { [key: string]: number } } = {
  A: { B: 4, C: 6 },
  B: { A: 4, F: 2 },
  C: { A: 6, D: 8 },
  D: { C: 8, E: 4, G: 1 },
  E: { B: 2, D: 4, F: 3, I: 8 },
  F: { B: 2, E: 3, G: 4, H: 6 },
  G: { D: 1, F: 4, H: 5 },
  H: { F: 6, G: 5 },
  I: { E: 8, G: 5 },
}

export default function dijkstra(start: string, end: string) {
  //update distance based on path
  const distances: { [key: string]: number } = {}
  //Record last nodes
  const previous: { [key: string]: string | null } = {}
  //record visited nodes
  const visited = new Set<string>()

  //loop and set the starting node as 0 and others as Infinity
  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity
    previous[vertex] = null
  }

  //Now start from 1st
  let currentNode: string | null = start

  while (currentNode !== null) {
    visited.add(currentNode)

    // Explore neighbors of current node
    // d = d[u]+w
    // A:{B:4,C:6} -> current Node A loop B,C
    for (const neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor]

      // Only consider this new path if it's shorter
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance
        previous[neighbor] = currentNode
      }
    }

    // Get the next node with the minimum distance that hasn't been visited
    currentNode = getMinDistanceNode(distances, visited)
  }

  // Backtrack from the end node to get the shortest path
  const path: string[] = []
  let pathNode = end
  while (pathNode !== null) {
    path.push(pathNode)
    pathNode = previous[pathNode]!
  }
  path.reverse() // The path is constructed backwards, so we need to reverse it

  return {
    path: path.join(','),
    distance: distances[end],
  }
}