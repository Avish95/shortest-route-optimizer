import { describe, it, expect } from 'vitest'
import dijkstra from './dijkstra'

describe('Dijkstra Algorithm', () => {
  it('should calculate the shortest path and distance between two nodes', () => {
    const result = dijkstra('A', 'I')
    expect(result.path).toBe('A,B,F,E,I')
    expect(result.distance).toBe(17) // Expected total distance is 17
  })

  it('should calculate the shortest path when the start and end node are the same', () => {
    const result = dijkstra('A', 'A')
    expect(result.path).toBe('A')
    expect(result.distance).toBe(0) // The distance from a node to itself is 0
  })

  it('should return the shortest path when nodes are directly connected', () => {
    const result = dijkstra('A', 'C')
    expect(result.path).toBe('A,C')
    expect(result.distance).toBe(6) // Direct distance from A to C is 6
  })
})
