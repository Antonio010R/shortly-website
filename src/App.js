import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/main-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
