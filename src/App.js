import './App.css';
import { Route, Routes }  from "react-router-dom";

import ChristmasCard from './components/ChristmasCard'

const App = () => {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/christmas-malcolm/:id" element ={<ChristmasCard />}/>
      </Routes>
    </div>
  )
}
export default App;
