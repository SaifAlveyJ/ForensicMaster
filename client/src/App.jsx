import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page from "./components/Page1";
import Plans from "./components/Plans";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
