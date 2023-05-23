import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page from "./components/Page1";
import Plans from "./components/Plans";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Payment from "./components/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route exact path="/Plans" element={<Plans />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
