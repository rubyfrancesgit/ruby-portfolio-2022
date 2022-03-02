import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home';
import About from "./pages/About";
import WebDev from "./pages/WebDev";
import UxUi from "./pages/UxUi";
import Arcade from "./pages/Arcade";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/ux-ui" element={<UxUi />} />
            <Route path="/arcade" element={<Arcade />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
