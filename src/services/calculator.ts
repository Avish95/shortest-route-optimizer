import type Path from '@/types/path'
import type Result from '@/types/result'
import dijkstra from '@/helpers/dijkstra'


export async function ShortestPath(inputs: Path): Promise<Result> {
  return new Promise(resolve => {
    setTimeout(() => {
      const from = inputs.fromnode
      const to = inputs.tonode

      const { path, distance } = dijkstra(from, to)
      resolve({
        from,
        to,
        path,
        distance,
      })
    }, 1000)
  })
}
