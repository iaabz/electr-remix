import { createLazyFileRoute } from '@tanstack/react-router'
import {net} from 'electron'



export const Route = createLazyFileRoute('/')({
  component: Index,
  
  
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}