import logo from './logo.svg';
import './App.css';
import Routers from './routes/Routers';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routers/>
      </DataProvider>
    </div>
  );
}

export default App;
