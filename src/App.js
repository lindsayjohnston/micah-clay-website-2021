import './App.css';
import MainBody from './modules/MainBody/MainBody';
// import Layout from './modules/Layout/Layout.js';
import NavBar from './modules/NavBar/NavBar.js';

function App() {
 
  return (
    <div className="App">
        <NavBar />
        <MainBody />

      {/* <Layout/> */}
    </div>
  );
}

export default App;
