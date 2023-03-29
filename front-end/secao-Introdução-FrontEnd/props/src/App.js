import Image from '../src/Image';
import staringCat from './staringCat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
       <Image source={ staringCat } alternativeText='Cute cat staring' />
    </div>
  );
}

export default App;
