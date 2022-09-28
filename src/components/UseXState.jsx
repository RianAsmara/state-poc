import { useMachine } from "@xstate/react"
import React from "react"
import { countingMachine } from "../state/counting.state"
function UseXStateComponent() {
  const [state, send] = useMachine(countingMachine)
  return (
    <div>
      <button onClick={() => send('INCREMENT')}>
        Using XState { state.context.count }
        </button>
    </div>
  )
}

export default UseXStateComponent