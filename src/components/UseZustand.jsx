import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 }))
}))
function UseZustandComponent() {

  const increment = useStore(state => state.inc)
  const votes = useStore(state => state.count)

  return (
    <div>
      <button onClick={increment}>
          Using Zustand {votes}
        </button>
    </div>
  )
}

export default UseZustandComponent