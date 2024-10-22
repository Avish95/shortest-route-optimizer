export default function getMinDistanceNode(
  distances: { [key: string]: number },
  visited: Set<string>,
): string | null {
  //1st lets set initial distance as Infinity
  let minDistance = Infinity
  let minNode: string | null = null

  for (const node in distances) {
    //if not checked before and distance is smaller select that
    if (!visited.has(node) && distances[node] < minDistance) {
      minDistance = distances[node]
      minNode = node
    }
  }

  return minNode
}
