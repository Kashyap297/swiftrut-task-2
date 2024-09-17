import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./components/CreateBlog";
import ViewBlog from "./components/ViewBlog";
import EditBlogs from "./components/EditBlogs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* <div className="container mx-auto mt-4">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/post/:id" element={<ViewBlog />} />
          <Route path="/edit/:id" element={<EditBlogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
        </div> */}
      <Router>
        <div>
          {/* Fixed Header */}
          <Header />
          {/* Page content starts below the header */}
          <div className="mt-15">
            {" "}
            {/* Adjust mt-24 based on your header height */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createblog" element={<CreateBlog />} />
              <Route path="*" element={<NotFound />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
