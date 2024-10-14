/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { describe, it, expect } from 'vitest'
import getRandomNodes from './randomNodes'

describe('getRandomNodes', () => {
  it('returns the specified number of random nodes', () => {
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const result = getRandomNodes(nodes, 3)

    expect(result.length).toBe(3)
    result.forEach(node => {
      expect(nodes).toContain(node)
    })
  })

  it('does not exceed the length of the nodes array', () => {
    const nodes = ['A', 'B', 'C']
    const result = getRandomNodes(nodes, 5)

    expect(result.length).toBe(3)
  })

  it('handles cases when count is zero', () => {
    const nodes = ['A', 'B', 'C']
    const result = getRandomNodes(nodes, 0)

    expect(result).toEqual([])
  })

  it('handle negative values for count', () => {
    const nodes = ['A', 'B', 'C']

    const result = getRandomNodes(nodes, -2)

    expect(result.length).toBe(2)
  })
})
