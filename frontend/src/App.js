import { Container } from 'react-bootstrap';
import HomeScreen from './Components/HomeScreen';
import Product from './Components/Product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import NavBar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights served</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
