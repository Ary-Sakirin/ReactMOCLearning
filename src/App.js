import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import "./Styles/boostrap.css"
import Layout from "./Screens/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        < Layout>
          <Routes>
            <Route path='/' exact element={< Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
