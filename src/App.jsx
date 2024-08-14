import { Route,Routes } from "react-router-dom"
import Homapage from "./Components/Homapage"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Homapage />}></Route>
    </Routes>
    </div>
  )
}

export default App