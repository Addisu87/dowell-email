import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
