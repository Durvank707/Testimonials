import Testinomial from './components/Testinomial';
import './App.css';
import review from './data.js'

function App() {
  return (
    <div className="App">
      <div className='heading'>
        <h1>Our Testimonials</h1>
        <div className='line'></div>
        <Testinomial review = {review}/> 
      </div>
      
    </div>
  );
}

export default App;
