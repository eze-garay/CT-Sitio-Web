

import Navbar from './components/Navbar/Navbar';
import Aspiradoras from './pages/Aspiradoras/aspiradoras';
import Cocinas from './pages/cocinas/cocinas'
import Soporte from './pages/Suport/soporte'
import Home from './pages/Home/home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Aspiradoras/>
      <Cocinas/>
      <Soporte/>
    </div>
  );
}

export default App;
