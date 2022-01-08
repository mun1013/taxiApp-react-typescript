import Home from './component/Home/Home';
import './App.css';
import TaxiesContextProvider from './store/taxies-context';

function App() {
  return (
    <TaxiesContextProvider>
      <Home/>
    </TaxiesContextProvider>
  );
}

export default App;
