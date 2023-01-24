import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import BlogPage from "./views/BlogPage";
import Home from "./views/Home";
import NewBlog from "./views/NewBlog";

function App() {
  return (
    <div className="font-sans " data-color-mode="light">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
