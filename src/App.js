import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./404";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./views/Auth/Auth";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import BlogPage from "./views/BlogPage";
import Home from "./views/Home";
import Manageblogs from "./views/Manageblog";
import NewBlog from "./views/NewBlog";

function App() {
  return (
    <div className="font-sans bg-gray-200" data-color-mode="light">
      <BrowserRouter>
        <Auth>
          <Navbar />
        </Auth>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />

          {/* Private Routes */}
          <Route
            path="/newblog"
            element={
              <Auth>
                <NewBlog />
              </Auth>
            }
          />
          <Route
            path="/manageblog"
            element={
              <Auth>
                <Manageblogs />
              </Auth>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
