/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { describe, it, expect, vi } from 'vitest'
import { ShortestPath } from '@/services/calculator' // Adjust the import as necessary
import dijkstra from '@/helpers/dijkstra'

vi.mock('@/helpers/dijkstra') // Mocking the dijkstra function

describe('ShortestPath', () => {
  it('calculates the shortest path correctly', async () => {
    const inputs = { fromnode: 'A', tonode: 'I' }
    const mockResult = {
      path: 'A,B,F,E,I',
      distance: 17,
    }

    ;(dijkstra as vi.Mock).mockReturnValue(mockResult)

    const result = await ShortestPath(inputs)

    expect(result).toEqual({
      from: 'A',
      to: 'I',
      path: mockResult.path,
      distance: mockResult.distance,
    })
    expect(dijkstra).toHaveBeenCalledWith('A', 'I') // Check if dijkstra was called with correct arguments
  })
})
