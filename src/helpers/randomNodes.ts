export default function getRandomNodes(
  nodes: string[],
  count: number,
): string[] {
  count = Math.floor(count)
  if (count < 0) {
    count = Math.abs(count)
  }
  const shuffled = [...nodes].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
