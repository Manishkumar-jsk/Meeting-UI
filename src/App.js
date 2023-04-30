import './App.css';
import Meeting from './components/Meeting/Meeting';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <div className="App">
        <h1 className='text-center my-5'>Generating Minutes of Meeting</h1>
        <Meeting />
        <Schedule />
    </div>
  );
}

export default App;
