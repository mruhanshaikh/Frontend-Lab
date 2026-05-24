import { useState } from "react"
import Counter from "./Components/Counter"
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex  p-[1rem] justify-center sm:justify-start gap-[1rem]">
      <Counter count={count} setCount={setCount}/> 
    </div>
  )
}

export default App