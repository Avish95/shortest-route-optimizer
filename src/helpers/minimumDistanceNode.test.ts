import { describe, it, expect } from 'vitest'
import getMinDistanceNode from './minimumDistanceNode'

describe('getMinDistanceNode', () => {
  it('should return the node with the smallest distance that is not visited', () => {
    const distances = { A: 10, B: 5, C: 3, D: 7 }
    const visited = new Set<string>(['A'])

    const result = getMinDistanceNode(distances, visited)

    // Since 'C' has the smallest distance (3) and is not visited, it should return 'C'
    expect(result).toBe('C')
  })

  it('should return null if all nodes are visited', () => {
    const distances = { A: 10, B: 5, C: 3, D: 7 }
    const visited = new Set<string>(['A', 'B', 'C', 'D'])

    const result = getMinDistanceNode(distances, visited)

    // All nodes are visited, so the result should be null
    expect(result).toBeNull()
  })

  it('should return the node with the smallest distance when no nodes are visited', () => {
    const distances = { A: 10, B: 5, C: 3, D: 7 }
    const visited = new Set<string>()

    const result = getMinDistanceNode(distances, visited)

    // 'C' has the smallest distance, so it should return 'C'
    expect(result).toBe('C')
  })

  it('should handle an empty distances object and return null', () => {
    const distances: { [key: string]: number } = {}
    const visited = new Set<string>()

    const result = getMinDistanceNode(distances, visited)

    // With no nodes in distances, the result should be null
    expect(result).toBeNull()
  })
})
