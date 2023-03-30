import { Routes,Route } from 'react-router-dom';
import './App.css';
import RegisterForm from './component/RegisterForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegisterForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
