import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rettingpage from './Components/Rettingpage';
import FinishPage from './Components/FinishPage';

function App() {
  const state = {
    isClicked: false,
    rettedNumber: null,
  };

  const [retting, setRetting] = useState(state);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Rettingpage retting={retting} setRetting={setRetting} />}
          />
          <Route path="submited" element={<FinishPage retting={retting} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
