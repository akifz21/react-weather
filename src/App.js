import './App.css';
import Container from './components/Container';
import { WeatherProvider } from './Context/WeathersContext';

function App() {


  return (
    <WeatherProvider>
    <div className="App">
        <Container />
    </div>
    </WeatherProvider>


  );
}

export default App;
