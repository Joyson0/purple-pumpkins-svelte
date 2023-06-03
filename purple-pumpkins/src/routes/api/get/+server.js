const msg = "Hai"
export async function GET() {
  // let res = await fetch('https://dummyjson.com/products')
  // let obj = await res.json()
  return new Response(JSON.stringify({greeting: msg}))
}