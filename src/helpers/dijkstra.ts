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
  const distances: { [key: string]: number } = {}
  const previous: { [key: string]: string | null } = {}
  const visited = new Set<string>()

  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity
    previous[vertex] = null
  }

  let currentNode: string | null = start

  while (currentNode !== null) {
    visited.add(currentNode)

    for (const neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor]

      
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance
        previous[neighbor] = currentNode
      }
    }

    currentNode = getMinDistanceNode(distances, visited)
  }

  const path: string[] = []
  let pathNode = end
  while (pathNode !== null) {
    path.push(pathNode)
    pathNode = previous[pathNode]!
  }
  path.reverse() 

  return {
    path: path.join(','),
    distance: distances[end],
  }
}