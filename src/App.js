import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Counterapp from './pages/Counterapp';
import Todoapp from './pages/Todoapp';
import Todoitem from './pages/Todoitem';
import Edittodo from './pages/Edittodo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Counterapp/>}/>
        <Route path="/todos" element={<Todoapp/>}/>
        <Route path="/todos/:id" element={<Todoitem/>}/>
        <Route path="/todos/:id/:edit" element={<Edittodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
