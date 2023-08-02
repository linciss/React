import HomeScreen from './Components/HomeScreen';
import Product from './Components/Product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Products</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
