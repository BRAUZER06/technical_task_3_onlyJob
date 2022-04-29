import { Login, Profile } from "./pages";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/Styled";
import { Header } from "./components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
