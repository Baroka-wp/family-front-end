import { Route, Routes } from 'react-router-dom';
import './App.css';
import InputPerson from './components/Input.person';
import FamilyTree from './components/familyTree';
// import Genealogy from './components/genealogy.person';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InputPerson />} />
      <Route path="/:person_id" element={<FamilyTree />} />
    </Routes>
  );
}

export default App;
