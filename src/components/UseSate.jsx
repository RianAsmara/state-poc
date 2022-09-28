import { useState } from 'react'

function UseStateComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Using Use State {count}
      </button>
    </div>
  )
}

export default UseStateComponent