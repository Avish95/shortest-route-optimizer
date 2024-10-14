/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { describe, it, expect } from 'vitest'
import getRandomNumber from './randomNumber'

describe('getRandomNumber', () => {
  it('returns a number between the two bounds (inclusive)', () => {
    const lowerBound = 1
    const upperBound = 10

    const result = getRandomNumber(lowerBound, upperBound)

    expect(result).toBeGreaterThanOrEqual(lowerBound)
    expect(result).toBeLessThanOrEqual(upperBound)
  })

  it('works with reversed bounds', () => {
    const lowerBound = 10
    const upperBound = 1

    const result = getRandomNumber(lowerBound, upperBound)

    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(10)
  })

  it('returns the same number when bounds are equal', () => {
    const result = getRandomNumber(5, 5)
    expect(result).toBe(5)
  })

  it('handles negative ranges', () => {
    const result = getRandomNumber(-10, -1)
    expect(result).toBeGreaterThanOrEqual(-10)
    expect(result).toBeLessThanOrEqual(-1)
  })
})
