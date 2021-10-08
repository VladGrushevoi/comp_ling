import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './page/Router';

function App() {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
