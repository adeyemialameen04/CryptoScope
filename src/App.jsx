import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinLists from "./Pages/CoinLists/CoinLists";
import { Navbar } from "./Components/Navbar/Navbar";
import News from "./Pages/News/News";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinLists />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
