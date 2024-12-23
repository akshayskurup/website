
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<PageRoutes />} ></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
