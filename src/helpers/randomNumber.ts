export default function getRandomNumber(a: number, b: number): number {
  const lower = Math.min(a, b)
  const upper = Math.max(a, b)

  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}