
import { useState } from 'react';
import './App.css'
import Home from './pages/Home/Home'
import Nav from './pages/Shared/Nav/Nav'
  
function App() {
  const [dark, setDark] = useState(false);
  const handleTheme = () => {
    setDark(!dark)
    // window.location.reload()
  }
  return (
    <div className="App" data-theme={dark ? "dark" : "light"}>
      <Nav handleTheme={handleTheme}></Nav>
      <div className='px-16'>
        <Home></Home>
      </div>
    </div>
  );
}

export default App
