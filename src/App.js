import Header from './Components/templates/Header/Header';
import Features from "./Components/templates/Features/Features";
import Plan from "./Components/templates/Plan/Plan";
import Network from "./Components/templates/Network/Network";
import Reviews from "./Components/templates/Reviews/Reviews";
import Subscribe from "./Components/templates/Subscribe/Subscribe";
import Footer from './Components/templates/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Features />
        <Plan />
        <Network />
        <Reviews />
        <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
