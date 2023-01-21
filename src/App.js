import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BlogPage from "./views/BlogPage";
import Home from "./views/Home";
import NewBlog from "./views/NewBlog";

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
