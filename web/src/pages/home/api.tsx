export async function fetchRandomNumber(): Promise<number> {
  await new Promise((r) => setTimeout(r, 400))
  return Math.floor(Math.random() * 1000)
}
