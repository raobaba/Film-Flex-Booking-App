
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ReactSlider from './components/ReactSlider/ReactSlider';
import Recommended from './components/Recommended/Recommended';

function App() {
  return (
    <>
    <Navbar/>
    <ReactSlider/>
    <Recommended/>

    <Footer/>
    </>
  );
}

export default App;
