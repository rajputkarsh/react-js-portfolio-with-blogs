import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Blogs from "../pages/blogs/Blogs";
import Blog from "../pages/blogs/Blog";
import AddBlog from "../pages/blogs/AddBlog";
import NotFound from "../pages/notFound/NotFound";
import { settings } from "../portfolio.js";

export default function Main(propss) {

  useEffect(() => {
    propss.theme.name == "light" ? document.body.className = "light" : document.body.className = "dark";
  }, [])

  let ROOT_URL = "";


  if (settings.isSplash) {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path={ROOT_URL + ""}
              element={
                <Splash
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />}
            />
            <Route
              path={"/home"}
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/experience"}
              element={
                <Experience
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/education"}
              element={
                <Education
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/contact"}
              element={
                <Contact
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/splash"}
              element={
                <Splash
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/projects"}
              element={
                <Projects
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/blogs"}
              element={
                <Blogs
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/add-blog"}
              element={
                <AddBlog
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/blog/:blogSlug"}
              element={
                <Blog
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route 
              path='*' 
              element={
              <NotFound 
                theme={propss.theme}
                setTheme={propss.setTheme}              
              />
              } 
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path={ROOT_URL + ""}
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/home"}
              element={
                <Home
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/experience"}
              element={
                <Experience
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/education"}
              element={
                <Education
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/contact"}
              element={
                <Contact
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/projects"}
              element={
                <Projects
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/blogs"}
              element={
                <Blogs
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/blog/:blogSlug"}
              element={
                <Blog
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path={ROOT_URL + "/add-blog"}
              element={
                <AddBlog
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
            <Route
              path='*'
              element={
                <NotFound
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
