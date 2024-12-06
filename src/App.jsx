import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  );
}

export default App;
