import { Route, Routes } from 'react-router-dom';
import './App.css';
import InputPerson from './components/Input.person';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputPerson />} />
    </Routes>
  );
}

export default App;
