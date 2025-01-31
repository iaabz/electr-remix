import { createFileRoute } from '@tanstack/react-router'
import { net } from 'electron'

type Test = {
    userId: number
    id: number
    title: string
    completed: boolean
}
const getsomething = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  
   return res.json() as unknown as Test
  }
export const Route = createFileRoute('/new')({
  component: New,
  loader: async () =>  await getsomething()
  
})

function New() {
  const data = Route.useLoaderData()
  return <div className="p-2">{data.title} </div>
}
