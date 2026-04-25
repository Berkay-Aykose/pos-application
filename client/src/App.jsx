import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';
import BillsPage from './pages/BillPage';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/bills" element={<BillsPage />} />
      </Routes> 

    </BrowserRouter>
  );
}

export default App;
