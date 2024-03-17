

import Navbar from './components/Navbar/Navbar';
import Aspiradoras from './pages/Aspiradoras/aspiradoras';
import Cocinas from './pages/cocinas/cocinas'
import Soporte from './pages/Suport/soporte'
import Home from './pages/Home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Aspiradoras" element={<Aspiradoras/>} />
        <Route path="/Cocinas" element={<Cocinas/>} />
        <Route path="/Soporte" element={<Soporte/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
