import { Route, Routes } from 'react-router-dom';
import './App.css';
import InputPerson from './components/Input.person';
// import FamilyTree from './components/familyTree';
import DetailsPerson from './components/details.person';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputPerson />} />
      <Route path="/:person_id" element={<DetailsPerson />} />
    </Routes>
  );
}

export default App;
