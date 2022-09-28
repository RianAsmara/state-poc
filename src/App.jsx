import './App.css'
import UseStateComponent from './components/UseSate'
import UseXStateComponent from './components/UseXState'
import UseZustandComponent from './components/UseZustand'
function App() {
  
  return (
    <div className="App">
      <div className="card">
        <UseZustandComponent />
        <br />
        <UseStateComponent />
        <br />
        <UseXStateComponent />
      </div>
    </div>
  )
}

export default App
