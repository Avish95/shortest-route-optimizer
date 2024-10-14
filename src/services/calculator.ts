import type Path from '@/types/path'
import type Result from '@/types/result'
import getRandomNumber from '@/helpers/randomNumber'
import getRandomNodes from '@/helpers/randomNodes'

const availableNodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export async function ShortestPath(inputs: Path): Promise<Result> {
  return new Promise(resolve => {
    setTimeout(() => {
      const numberOfNodes = getRandomNumber(1, availableNodes.length)
      const randomNodes = getRandomNodes(availableNodes, numberOfNodes)

      const firstLetter = inputs.fromnode
      const lastLetter = inputs.tonode
      const firstIndex = randomNodes.indexOf(firstLetter)
      const lastIndex = randomNodes.indexOf(lastLetter)

      if (firstIndex === -1) {
        randomNodes.unshift(firstLetter)
      } else {
        randomNodes.splice(firstIndex, 1)
        randomNodes.unshift(firstLetter)
      }

      if (lastIndex === -1) {
        randomNodes.push(lastLetter)
      } else {
        randomNodes.splice(lastIndex, 1)
        randomNodes.push(lastLetter)
      }

      resolve({
        from: firstLetter,
        to: lastLetter,
        path: randomNodes.join(','),
        distance: 3 + getRandomNumber(5, 15),
      })
    }, 3000)
  })
}
