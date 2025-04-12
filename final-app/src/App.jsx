import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Data from './components/Recipes';
import Footer from './components/Footer';
import Search from './components/Search';



function App() {
  return (
    <div className="bg-primary"> 
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/recipes" element={<Data />} />       
        <Route path="/search" element={<Search />} />         
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
