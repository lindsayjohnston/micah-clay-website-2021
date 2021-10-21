import './App.css';
import MainBody from './modules/MainBody/MainBody';
import NavBar from './modules/NavBar/NavBar.js';
import Footer from './modules/Footer/Footer.js';

function App() {
 
  return (
    <div className="App">
        <NavBar />
        <MainBody />
        <Footer />
    </div>
  );
}

export default App;
