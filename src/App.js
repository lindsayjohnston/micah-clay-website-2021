import './App.css';
import MainBody from './modules/MainBody/MainBody';
import NavBar from './modules/NavBar/NavBar.js';
import Footer from './modules/Footer/Footer.js';
import BocaloudFooter from './modules/Bocaloud-Footer/bocaloudFooter';

function App() {
 
  return (
    <div className="App">
        <NavBar />
        <MainBody />
        <BocaloudFooter />
        <Footer />
    </div>
  );
}

export default App;
