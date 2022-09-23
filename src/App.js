import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Details from './page/Details'
import Search from './page/Search'
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/details" exact element={<Details />} /> 
        <Route path="/results" exact element={<Search />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
