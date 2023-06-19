import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import "./Styles/boostrap.css"
import LoginPage from "./Pages/login";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={< Home />} />
            <Route path='/login' exact element={< LoginPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
